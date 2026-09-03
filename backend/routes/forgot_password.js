const express = require("express");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const router = express.Router();

const MyModel = require("../models/users");


// =========================================================
// EMAIL TRANSPORTER
// =========================================================

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});


// =========================================================
// FORGOT PASSWORD
// =========================================================

router.post("/forgot-password", async (req, res) => {
  try {

    const {
      email
    } = req.body || {};


    // =====================================================
    // VALIDATION
    // =====================================================

    if (!email) {
      return res.status(400).json({
        status: false,
        message: "Email address is required"
      });
    }


    // =====================================================
    // CLEAN EMAIL
    // =====================================================

    const userEmail = email.trim().toLowerCase();


    // =====================================================
    // FIND USER
    // =====================================================

    const user = await MyModel.findOne({
      email: userEmail
    });


    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found"
      });
    }


    // =====================================================
    // GENERATE TOKEN
    // =====================================================

    const resetToken = crypto
      .randomBytes(32)
      .toString("hex");


    // =====================================================
    // HASH TOKEN
    // =====================================================

    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");


    // =====================================================
    // TOKEN EXPIRY
    // 15 MINUTES
    // =====================================================

    const expiryTime =
      Date.now() + 15 * 60 * 1000;


    // =====================================================
    // SAVE TOKEN
    // =====================================================

    user.resetPasswordToken = hashedToken;

    user.resetPasswordExpires = expiryTime;

    await user.save();


    // =====================================================
    // RESET LINK
    // =====================================================

    const frontendUrl =
      process.env.FRONTEND_URL ||
      "http://localhost:3000";

    const resetLink =
      `${frontendUrl}/reset-password/${resetToken}`;


    // =====================================================
    // EMAIL
    // =====================================================

    await transporter.sendMail({

      from: `"IronFit" <${process.env.EMAIL_USER}>`,

      to: user.email,

      subject: "IronFit - Reset Your Password",

      text: `
Hello ${user.name},

You requested to reset your IronFit account password.

Click the link below to create a new password:

${resetLink}

This link will expire in 15 minutes.

If you did not request a password reset, you can safely ignore this email.

IronFit
      `,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 25px;
          background: #111111;
          color: #ffffff;
        ">

          <h1 style="
            margin: 0 0 10px;
            font-size: 32px;
            letter-spacing: 2px;
          ">
            IRON<span style="color:#b8ff00;">FIT</span>
          </h1>

          <p style="
            color:#b8ff00;
            font-size:12px;
            font-weight:bold;
            letter-spacing:2px;
          ">
            ACCOUNT RECOVERY
          </p>

          <h2 style="
            font-size:28px;
            margin-top:30px;
          ">
            Reset Your Password
          </h2>

          <p style="
            color:#cccccc;
            line-height:1.7;
          ">
            Hello ${user.name},
          </p>

          <p style="
            color:#cccccc;
            line-height:1.7;
          ">
            We received a request to reset your IronFit
            account password.
          </p>

          <a
            href="${resetLink}"
            style="
              display:inline-block;
              margin:25px 0;
              padding:16px 24px;
              background:#b8ff00;
              color:#111111;
              text-decoration:none;
              font-weight:bold;
              letter-spacing:1px;
            "
          >
            RESET PASSWORD →
          </a>

          <p style="
            color:#888888;
            font-size:13px;
            line-height:1.6;
          ">
            This reset link will expire in 15 minutes.
          </p>

          <p style="
            color:#888888;
            font-size:13px;
            line-height:1.6;
          ">
            If you did not request this password reset,
            you can safely ignore this email.
          </p>

          <p style="
            margin-top:30px;
            color:#666666;
            font-size:12px;
          ">
            IronFit
          </p>

        </div>
      `
    });


    // =====================================================
    // SUCCESS
    // =====================================================

    return res.status(200).json({
      status: true,
      message: "Password reset link sent to your email"
    });


  } catch (err) {

    console.log(
      "FORGOT PASSWORD ERROR:",
      err
    );

    return res.status(500).json({
      status: false,
      message: "Unable to send password reset email"
    });

  }
});


// =========================================================
// RESET PASSWORD
// =========================================================

router.post("/reset-password/:token", async (req, res) => {
  try {

    const {
      password,
      confirmPassword
    } = req.body || {};

    const {
      token
    } = req.params;


    // =====================================================
    // VALIDATION
    // =====================================================

    if (!token) {
      return res.status(400).json({
        status: false,
        message: "Reset token is required"
      });
    }


    if (!password || !confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "All fields are required"
      });
    }


    if (password.length < 6) {
      return res.status(400).json({
        status: false,
        message: "Password must be at least 6 characters"
      });
    }


    if (password !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "Passwords do not match"
      });
    }


    // =====================================================
    // HASH TOKEN
    // =====================================================

    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");


    // =====================================================
    // FIND VALID TOKEN
    // =====================================================

    const user = await MyModel.findOne({
      resetPasswordToken: hashedToken,

      resetPasswordExpires: {
        $gt: new Date()
      }
    });


    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Reset link is invalid or expired"
      });
    }


    // =====================================================
    // HASH NEW PASSWORD
    // =====================================================

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );


    // =====================================================
    // UPDATE PASSWORD
    // =====================================================

    user.password = hashedPassword;


    // =====================================================
    // REMOVE TOKEN
    // =====================================================

    user.resetPasswordToken = null;

    user.resetPasswordExpires = null;


    await user.save();


    // =====================================================
    // SUCCESS
    // =====================================================

    return res.status(200).json({
      status: true,
      message: "Password reset successfully"
    });


  } catch (err) {

    console.log(
      "RESET PASSWORD ERROR:",
      err
    );

    return res.status(500).json({
      status: false,
      message: "Something went wrong"
    });

  }
});


module.exports = router;