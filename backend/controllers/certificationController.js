const Certification = require('../models/Certification');

const getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find({ userId: req.userId });
    res.json(certifications);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createCertification = async (req, res) => {
  try {
    const { name, issuer, year, credential } = req.body;
    const certification = await Certification.create({ userId: req.userId, name, issuer, year, credential });
    res.status(201).json(certification);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCertification = async (req, res) => {
  try {
    const result = await Certification.deleteOne({ _id: req.params.id, userId: req.userId });
    if (result.deletedCount === 0) return res.status(404).json({ message: 'Certification not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getCertifications, createCertification, deleteCertification };