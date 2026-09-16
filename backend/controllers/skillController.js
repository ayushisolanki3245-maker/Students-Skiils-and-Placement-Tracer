// controllers/skillController.js
const Skill = require('../models/Skill');

// GET /api/skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ userId: req.userId });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /api/skills
const createSkill = async (req, res) => {
  try {
    const { name, category, level } = req.body;
    const skill = await Skill.create({ userId: req.userId, name, category, level });
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT /api/skills/:id
const updateSkill = async (req, res) => {
  try {
    const { name, category, level } = req.body;
    const skill = await Skill.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { name, category, level },
      { new: true, runValidators: true }
    );
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    res.json(skill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/skills/:id
const deleteSkill = async (req, res) => {
  try {
    const result = await Skill.deleteOne({ _id: req.params.id, userId: req.userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getSkills, createSkill, updateSkill, deleteSkill };