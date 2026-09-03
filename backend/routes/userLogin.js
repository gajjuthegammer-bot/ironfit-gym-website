const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

const MyModel = require("../models/users");


// ========================================
// REGISTER
// ========================================

router.post("/registration", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
    } = req.body;

    // Check required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }


    // Check password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "Passwords do not match",
      });
    }


    // Check existing email
    const existingUser = await MyModel.findOne({
      email: email.trim().toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        status: false,
        message: "Email already registered",
      });
    }


    // Combine first and last name
    const name = `${firstName} ${lastName}`.trim();


    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );


    // Create user
    const user = await MyModel.create({
      name,
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      password: hashedPassword,
    });


    res.status(201).json({
      status: true,
      message: "Registration successful",

      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        membership: user.membership || null,
      },
    });

  } catch (err) {

    console.log(
      "REGISTRATION ERROR:",
      err
    );

    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
});


// ========================================
// LOGIN
// ========================================

router.post("/login", async (req, res) => {
  try {

    const {
      email,
      password,
    } = req.body;


    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message:
          "Email and password are required",
      });
    }


    // Find user
    const user = await MyModel.findOne({
      email: email.trim().toLowerCase(),
    });


    if (!user) {
      return res.status(401).json({
        status: false,
        message:
          "Invalid Email or Password",
      });
    }


    // Compare password
    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );


    if (!passwordMatch) {
      return res.status(401).json({
        status: false,
        message:
          "Invalid Email or Password",
      });
    }


    // Successful login
    res.status(200).json({
      status: true,
      message: "Login successful",

      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        profileImage: user.profileImage || null,
        membership:
          user.membership || null,
      },
    });

  } catch (err) {

    console.log(
      "LOGIN ERROR:",
      err
    );

    res.status(500).json({
      status: false,
      message: "Login failed",
    });
  }
});


module.exports = router;