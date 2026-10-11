const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { getJobs, getJobMatch } = require('../controllers/jobController');

router.use(protect);

router.get('/', getJobs);
router.get('/:id/match', getJobMatch);

module.exports = router;