const Project = require('../models/Project');

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.userId });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createProject = async (req, res) => {
  try {
    const { name, description, technologies, github } = req.body;
    const project = await Project.create({ userId: req.userId, name, description, technologies, github });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const result = await Project.deleteOne({ _id: req.params.id, userId: req.userId });
    if (result.deletedCount === 0) return res.status(404).json({ message: 'Project not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProjects, createProject, deleteProject };