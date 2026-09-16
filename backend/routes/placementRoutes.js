const express = require("express");
const router = express.Router();

const {
  getPlacements,
  createPlacement,
  updatePlacement,
  deletePlacement
} = require("../controllers/placementController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getPlacements);
router.post("/", authMiddleware, createPlacement);
router.put("/:id", authMiddleware, updatePlacement);
router.delete("/:id", authMiddleware, deletePlacement);

module.exports = router;