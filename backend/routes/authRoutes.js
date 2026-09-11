const express = require("express");
const { signup, login } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/protected", protect, (req, res) => {
  res.status(200).json({
    message: "You accessed a protected route",
    userId: req.userId,
  });
});

module.exports = router;