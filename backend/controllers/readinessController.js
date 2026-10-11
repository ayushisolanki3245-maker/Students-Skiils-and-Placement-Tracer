const User = require('../models/User');
const Skill = require('../models/Skill');
const DSATopic = require('../models/DSATopic');
const Project = require('../models/Project');
const Certification = require('../models/Certification');
const { calculateCategoryProgress } = require('../utils/categoryProgress');
const { calculateReadiness } = require('../utils/calculateReadiness');

const getReadiness = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    const skills = await Skill.find({ userId: req.userId });
    const dsaTopics = await DSATopic.find({ userId: req.userId });
    const projectCount = await Project.countDocuments({ userId: req.userId });
    const certCount = await Certification.countDocuments({ userId: req.userId });

    const categoryProgress = calculateCategoryProgress(skills, dsaTopics);
    const result = calculateReadiness({
      profile: user.profile,
      categoryProgress,
      projectCount,
      certCount
    });

    res.json({ ...result, categoryProgress });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getReadiness };