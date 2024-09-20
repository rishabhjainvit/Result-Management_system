const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const { protectAdmin, protectStudent } = require('./middleware/authMiddleware');

// ======================== Admin Routes ========================
router.post('/admin/manage', protectAdmin, (req, res) => {
    // Example route for managing users
    // Add actual admin route logic here
    res.status(200).json({ message: 'Admin management route' });
});

// You can add more admin routes here, e.g., generating reports, etc.
router.get('/admin/reports', protectAdmin, (req, res) => {
    res.status(200).json({ message: 'Report generated' });
});

// ======================== Auth Routes ========================
router.post('/auth/login', authController.login);

router.post('/auth/signup', authController.signup);

// GET route for checking status
router.get('/auth/status', (req, res) => {
    res.json({ status: 'OK' });
});

// ======================== Student Routes ========================
router.post('/student/courses', protectStudent, (req, res) => {
    // Example route for managing courses
    res.status(200).json({ message: 'Courses management route for students' });
});

// Example route for fees management
router.get('/student/fees', protectStudent, (req, res) => {
    res.status(200).json({ message: 'Fees management route' });
});

// ======================== Export the Router ========================
module.exports = router;
