// models/Skill.js
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['Frontend', 'Backend', 'Programming', 'Database', 'Core CS', 'Tools', 'Soft Skills']
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  }
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
