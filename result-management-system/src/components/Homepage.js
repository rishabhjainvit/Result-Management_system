import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/homepage.css'; // Import the CSS file for styling
import illustration from '../assests/homepage.png'; // Import the image

const Homepage = () => {
    return (
        <div className="homepage-container">
            {/* Left side: Image */}
            <div className="image-container">
                <img src={illustration} alt="Classroom" className="illustration" />
            </div>

            {/* Right side: Content */}
            <div className="content-container">
                <h1>Welcome to <span className="brand-name">EduQuest</span></h1>
                <h2 className="sub-heading">A Result Management System</h2>
                <p className="description">
                    Streamline College management, class organization, and add students and faculty. 
                    Seamlessly track attendance, assess performance, and provide feedback.
                </p>

                {/* Login Button */}
                <Link to="/login">
                    <button className="login-button">Login as Admin</button>
                </Link>
                <Link to="/logins">
                    <button className="login-button">Login as Student</button>
                </Link>

                {/* Sign up text */}
                <p className="signup-text">
                    Don't have an account?{' '}
                    <Link to="/SignUp" className="signup-link">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Homepage;
