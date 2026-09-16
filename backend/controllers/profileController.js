const User = require("../models/User");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
      profile: user.profile,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const {
      college,
      rollNumber,
      course,
      semester,
      cgpa,
      backlogs,
      graduationYear,
    } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        profile: {
          college,
          rollNumber,
          course,
          semester,
          cgpa,
          backlogs,
          graduationYear,
        },
      },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      profile: user.profile,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = { getProfile, updateProfile };