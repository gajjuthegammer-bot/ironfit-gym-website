const express = require("express");

const router = express.Router();

const MyModel = require("../models/users");


// ========================================
// SELECT MEMBERSHIP
// ========================================

router.patch("/membership/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const { plan } = req.body;


    // Check plan
    if (!plan) {
      return res.status(400).json({
        status: false,
        message: "Membership plan is required",
      });
    }


    // Official plans and prices
    const plans = {
      Basic: 999,
      Pro: 1499,
      Elite: 2499,
    };


    // Check valid plan
    if (!plans[plan]) {
      return res.status(400).json({
        status: false,
        message: "Invalid membership plan",
      });
    }


    // Find user
    const user = await MyModel.findById(id);


    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }


    // Membership dates
    const startDate = new Date();

    const expiryDate = new Date();

    expiryDate.setMonth(
      expiryDate.getMonth() + 1
    );


    // Update membership
    user.membership = {
      plan: plan,
      price: plans[plan],
      startDate: startDate,
      expiryDate: expiryDate,
      status: "Active",
    };


    await user.save();


    // Response
    return res.status(200).json({
      status: true,
      message:
        `${plan} membership selected successfully`,

      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        membership: user.membership,
      },
    });

  } catch (err) {

    console.log(
      "MEMBERSHIP ERROR:",
      err
    );

    return res.status(500).json({
      status: false,
      message:
        "Unable to update membership",
    });
  }
});


module.exports = router;