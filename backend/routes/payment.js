const express = require("express");
const crypto = require("crypto");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


// ========================================
// CREATE PAYMENT ORDER
// ========================================

router.post("/payment/create-order", async (req, res) => {
  try {
    console.log("CREATE ORDER REQUEST:", req.body);

    const { plan, amount } = req.body;

    if (!plan || !amount) {
      return res.status(400).json({
        status: false,
        message: "Plan and amount are required",
      });
    }

    const plans = {
      Basic: 999,
      Pro: 1499,
      Elite: 2499,
    };

    if (!plans[plan]) {
      return res.status(400).json({
        status: false,
        message: "Invalid membership plan",
      });
    }

    if (Number(amount) !== plans[plan]) {
      return res.status(400).json({
        status: false,
        message: "Invalid membership amount",
      });
    }

    const options = {
      amount: plans[plan] * 100,
      currency: "INR",
      receipt: `ironfit_${Date.now()}`,
    };

    console.log("RAZORPAY ORDER OPTIONS:", options);

    const order = await razorpay.orders.create(options);

    console.log("RAZORPAY ORDER CREATED:", order.id);

    return res.status(200).json({
      status: true,
      message: "Payment order created successfully",
      data: {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    });

  } catch (err) {
    console.log("CREATE ORDER ERROR:", err);

    return res.status(500).json({
      status: false,
      message:
        err?.error?.description ||
        err?.message ||
        "Unable to create payment order",
    });
  }
});


// ========================================
// VERIFY PAYMENT
// ========================================

router.post("/payment/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        status: false,
        message: "Payment verification details are required",
      });
    }

    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(
        `${razorpay_order_id}|${razorpay_payment_id}`
      )
      .digest("hex");

    if (
      generatedSignature !== razorpay_signature
    ) {
      return res.status(400).json({
        status: false,
        message: "Payment verification failed",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Payment verified successfully",
    });

  } catch (err) {
    console.log("VERIFY PAYMENT ERROR:", err);

    return res.status(500).json({
      status: false,
      message: "Unable to verify payment",
    });
  }
});


module.exports = router;