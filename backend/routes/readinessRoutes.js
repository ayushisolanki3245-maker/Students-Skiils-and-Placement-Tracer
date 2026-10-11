const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { getReadiness } = require('../controllers/readinessController');

router.use(protect);
router.get('/', getReadiness);

module.exports = router;