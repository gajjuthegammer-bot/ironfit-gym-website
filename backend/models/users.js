const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    phone: {
      type: String,
      required: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    membership: {
      plan: {
        type: String,
        default: "Not Selected"
      },

      price: {
        type: Number,
        default: 0
      },

      startDate: {
        type: Date,
        default: null
      },

      expiryDate: {
        type: Date,
        default: null
      },

      status: {
        type: String,
        default: "Inactive"
      }
    },

    resetPasswordToken: {
      type: String,
      default: null
    },

    resetPasswordExpires: {
      type: Date,
      default: null
    },
    profileImage: {
    type: String,
    default: null
}
  },
  {
    timestamps: true
  }
);

const MyModel = mongoose.model("gym_userLogin", schema);

module.exports = MyModel;