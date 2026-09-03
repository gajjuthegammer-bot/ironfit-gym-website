const express = require("express");

const bcrypt = require("bcryptjs");

const router = express.Router();

const MyModel = require("../models/users");


// =========================================================
// CHANGE PASSWORD
// =========================================================

router.patch("/change-password", async (req, res) => {
  try {

    // GET DATA FROM REQUEST

    const {
      email,
      currentPassword,
      newPassword
    } = req.body || {};


    // =====================================================
    // VALIDATION
    // =====================================================

    if (
      !email ||
      !currentPassword ||
      !newPassword
    ) {
      return res.status(400).json({
        status: false,
        message: "All fields are required"
      });
    }


    // =====================================================
    // CLEAN EMAIL
    // =====================================================

    const userEmail = email.trim().toLowerCase();


    // =====================================================
    // PASSWORD LENGTH
    // =====================================================

    if (newPassword.length < 6) {
      return res.status(400).json({
        status: false,
        message: "New password must be at least 6 characters"
      });
    }


    // =====================================================
    // SAME PASSWORD CHECK
    // =====================================================

    if (currentPassword === newPassword) {
      return res.status(400).json({
        status: false,
        message: "New password must be different from current password"
      });
    }


    // =====================================================
    // FIND USER
    // =====================================================

    const user = await MyModel.findOne({
      email: userEmail
    });


    // =====================================================
    // USER NOT FOUND
    // =====================================================

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found"
      });
    }


    // =====================================================
    // CHECK CURRENT PASSWORD
    // =====================================================

    const passwordMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );


    // =====================================================
    // WRONG CURRENT PASSWORD
    // =====================================================

    if (!passwordMatch) {
      return res.status(401).json({
        status: false,
        message: "Current password is incorrect"
      });
    }


    // =====================================================
    // HASH NEW PASSWORD
    // =====================================================

    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );


    // =====================================================
    // UPDATE PASSWORD
    // =====================================================

    user.password = hashedPassword;

    await user.save();


    // =====================================================
    // SUCCESS
    // =====================================================

    return res.status(200).json({
      status: true,
      message: "Password changed successfully"
    });


  } catch (err) {

    console.log(
      "CHANGE PASSWORD ERROR:",
      err
    );

    return res.status(500).json({
      status: false,
      message: "Something went wrong while changing password"
    });

  }
});


module.exports = router;