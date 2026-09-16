const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    profile: {
      college: { type: String },
      rollNumber: { type: String },
      course: {
        type: String,
        enum: ["BCA", "B.Tech", "MCA", "M.Tech"],
      },
      semester: { type: Number },
      cgpa: { type: Number },
      backlogs: { type: Number },
      graduationYear: { type: Number },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;