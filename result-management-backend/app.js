const express = require('express');
const bcrypt = require('bcryptjs'); // Add this line at the top of your file
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

// Log incoming request URL
app.use((req, res, next) => {
    console.log(`Incoming request URL: ${req.url}`);
    next();
});

// Enhanced logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    console.log('Request Body:', req.body);
    next();
});

// CORS configuration
app.use(cors({
    origin: '*', // Be cautious with this in production, should limit to specific domains
    credentials: true
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection with enhanced error logging
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure code 1
    }
};

connectDB();

// ======================== Define User Schema ========================

// User schema definition
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: { type: String, unique: true } // Enforces unique email
});


// Create User model
const User = mongoose.model('User', UserSchema);

// ======================== Define Routes ========================

// Signup route for creating new users
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if all required fields are provided
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Create new user with plain text password
        const newUser = new User({
            username: username,
            email: email,
            password: password // Save the plain text password
        });

        // Save the new user to the database
        await newUser.save();

        // Log the newly created user (without exposing the password)
        console.log('New User Created:', { username: newUser.username, email: newUser.email });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Error saving user' });
    }
});

// Login route for logging new users
app.post('/api/auth/login', async (req, res) => {
    try {
        // Log the request body to inspect the input data
        console.log('Request body:', req.body);

        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            console.log('Email or password not provided');
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find the user by email
        const user = await User.findOne({ email: email });

        // If the user doesn't exist
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ message: 'User not found' });
        }

        // Log the user object to inspect the retrieved data from the database
        console.log('User object:', user);

        // Log the provided and stored passwords for debugging
        console.log('Provided password:', password.trim());
        console.log('Stored password:', user.password.trim());

        // Compare the plain text password directly (with trimming)
        const isMatch = (password.trim() === user.password.trim());

        // Log the result of the password comparison
        console.log('Password match result:', isMatch);

        // If the password does not match
        if (!isMatch) {
            console.log('Invalid credentials');
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If login is successful, generate a JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email }, 
            '9c4ce338c4a5da4a31b172a46dbfe9bf49c952df3cfe51663df2a18ae25dea40', // Secret key
            { expiresIn: '1h' }
        );

        // Respond with success message and the token
        console.log('Login successful');
        res.status(200).json({ message: 'Login successful', token: token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});




// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error details:', err);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
        }
    });
});

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully.');
    server.close(() => {
        console.log('Process terminated.');
    });
});
