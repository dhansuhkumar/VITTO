const express = require('express');
const router = express.Router();
const { createLead, getLeadById } = require('../controllers/leadController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createLead);
router.get('/:id', authMiddleware, getLeadById);

module.exports = router;
