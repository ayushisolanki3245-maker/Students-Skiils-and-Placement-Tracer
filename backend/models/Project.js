const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: { type: String, required: true },
  description: String,
  technologies: [String],
  github: String
});

module.exports = mongoose.model('Project', projectSchema);