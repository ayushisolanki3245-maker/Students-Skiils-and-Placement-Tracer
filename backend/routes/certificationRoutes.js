const express = require('express');
const router = express.Router();
const { getCertifications, createCertification, deleteCertification } = require('../controllers/certificationController');
const protect = require('../middleware/authMiddleware');

router.get('/', protect, getCertifications);
router.post('/', protect, createCertification);
router.delete('/:id', protect, deleteCertification);

module.exports = router;