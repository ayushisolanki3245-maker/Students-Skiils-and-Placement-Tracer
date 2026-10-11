const JobPosting = require('../models/JobPosting');
const Skill = require('../models/Skill');
const DSATopic = require('../models/DSATopic');
const { calculateCategoryProgress } = require('../utils/categoryProgress');
const { calculateMatch } = require('../utils/calculateMatch');

const getJobs = async (req, res) => {
  try {
    const jobs = await JobPosting.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getJobMatch = async (req, res) => {
  try {
    const job = await JobPosting.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const skills = await Skill.find({ userId: req.userId });
    const dsaTopics = await DSATopic.find({ userId: req.userId });

    const progress = calculateCategoryProgress(skills, dsaTopics);
    const result = calculateMatch(job, skills, progress);

    res.json({ jobId: job._id, title: job.title, company: job.company, ...result });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getJobs, getJobMatch };