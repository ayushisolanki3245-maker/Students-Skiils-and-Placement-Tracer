const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: { type: String, required: true },
  issuer: String,
  year: Number,
  credential: String
});

module.exports = mongoose.model('Certification', certificationSchema);