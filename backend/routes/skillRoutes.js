// routes/skillRoutes.js
const express = require('express');
const router = express.Router();
const { getSkills, createSkill, updateSkill, deleteSkill } = require('../controllers/skillController');
const auth = require('../middleware/authMiddleware'); // your JWT verification middleware

router.get('/', auth, getSkills);
router.post('/', auth, createSkill);
router.put("/:id", auth, updateSkill);
router.delete('/:id', auth, deleteSkill);

module.exports = router;
