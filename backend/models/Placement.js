const mongoose = require("mongoose");

const placementSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    company: {
      type: String,
      required: true,
      trim: true
    },

    role: {
      type: String,
      required: true,
      trim: true
    },

    package: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      enum: [
        "Not Applied",
        "Applied",
        "Shortlisted",
        "Placed",
        "Rejected"
      ],
      default: "Not Applied"
    },

    eligible: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Placement", placementSchema);