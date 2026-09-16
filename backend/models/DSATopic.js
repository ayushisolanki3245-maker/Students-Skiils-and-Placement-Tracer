// models/DSATopic.js

const mongoose = require("mongoose");

const dsaTopicSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true },
  easy: { type: Number, default: 0 },
  medium: { type: Number, default: 0 },
  hard: { type: Number, default: 0 }
});

const DSATopic =  mongoose.model("DSATopic",dsaTopicSchema);

module.exports = DSATopic;