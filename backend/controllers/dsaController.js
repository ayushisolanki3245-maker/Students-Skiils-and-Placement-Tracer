const DSATopic = require("../models/DSATopic");

// controllers/dsaController.js

const getTopics = async (req, res) => {
  try {
    const topics = await DSATopic.find({ userId: req.userId });
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createTopic = async (req, res) => {
  try {
    const { name, easy, medium, hard } = req.body;
    const topic = await DSATopic.create({ userId: req.userId, name, easy, medium, hard });
    res.status(201).json(topic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateTopic = async (req, res) => {
  try {
    const { easy = 0, medium = 0, hard = 0 } = req.body;
    const topic = await DSATopic.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { $inc: { easy, medium, hard } },   // <-- increments, doesn't overwrite
      { new: true }                        // <-- return the updated doc, not the old one
    );
    if (!topic) return res.status(404).json({ message: 'Topic not found' });
    res.json(topic);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteTopic = async (req, res) => {
  try {
    const result = await DSATopic.deleteOne({ _id: req.params.id, userId: req.userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getTopics, createTopic, updateTopic, deleteTopic };