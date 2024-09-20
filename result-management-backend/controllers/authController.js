const Admin = require('../models/Admin');
const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to generate JWT tokens
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Signup function
exports.signup = (req, res, next) => {
    console.log(req.body); // Logs the request body to the console for debugging
    console.log(req.headers);

    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    res.status(201).json({
        message: 'User signed up successfully!',
        data: { username, email }
    });
};


// Login function
exports.login = async (req, res, next) => {

    console.log(req.body);
    console.log(req.headers);
    
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return res.status(400).json({ message: 'Email, password, and role are required' });
    }

    try {
        // Find the user (Admin or Student) based on the role
        const user = role === 'admin' ? await Admin.findOne({ email }) : await Student.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = generateToken(user._id, role);

        res.status(200).json({ message: 'Login successful', token, user: { id: user._id, username: user.username, email, role } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error during login' });
    }
};
