require('dotenv').config();
const mongoose = require('mongoose');
const JobPosting = require('../models/JobPosting');
const jobs = require('../data/jobs.json');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // safety check: weights must sum to 100
    for (const job of jobs) {
      const sum = Object.values(job.categoryWeights).reduce((a, b) => a + b, 0);
      if (sum !== 100) throw new Error(`Weights for "${job.title}" sum to ${sum}, not 100`);
    }

    await JobPosting.deleteMany({});
    await JobPosting.insertMany(jobs);
    console.log(`Seeded ${jobs.length} job postings`);
  } catch (err) {
    console.error('Seed failed:', err.message);
  } finally {
    await mongoose.disconnect();
  }
};

seed();