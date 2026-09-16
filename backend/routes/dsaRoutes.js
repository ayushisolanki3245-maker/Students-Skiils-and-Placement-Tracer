const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const { getTopics, createTopic, updateTopic, deleteTopic } = require("../controllers/dsaController");

router.get('/', protect, getTopics);
router.post('/', protect, createTopic);
router.put('/:id', protect, updateTopic);
router.delete("/:id", protect, deleteTopic);

module.exports = router;
