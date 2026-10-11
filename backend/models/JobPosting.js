const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  package: String, // string, e.g. "6 LPA" (same convention as PlacementDrive)
  requiredSkills: [String], // stored normalized: lowercase, trimmed
  categoryWeights: {
    dsa: { type: Number, required: true },
    mern: { type: Number, required: true },
    fundamentals: { type: Number, required: true },
    communication: { type: Number, required: true }
  }
}, { timestamps: true });

module.exports = mongoose.model('JobPosting', jobPostingSchema);