const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, authorize('admin'), getAllUsers);
router.get('/:id', protect, authorize('admin', 'student'), getUserById);

module.exports = router;
