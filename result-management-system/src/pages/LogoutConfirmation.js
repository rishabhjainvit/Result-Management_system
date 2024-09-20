import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LogoutConfirmation = ({ show, onCancel }) => {
    const navigate = useNavigate(); // Initialize navigate for redirection

    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark transparent background
            display: show ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            animation: show ? 'fadeIn 0.5s ease' : '', // Fade-in animation
        },
        popup: {
            backgroundColor: '#2f3640', // Dark background matching theme
            color: '#f1f2f6',
            padding: '30px',
            borderRadius: '10px',
            width: '350px', // Slightly smaller width for a more compact design
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            animation: show ? 'popupAnimation 0.5s ease' : '', // Popup animation
        },
        popupText: {
            fontSize: '18px', // Reduced text size
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '20px',
        },
        button: {
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease', // Added hover transition
        },
        confirmButton: {
            backgroundColor: '#3742fa',
            color: '#fff',
        },
        cancelButton: {
            backgroundColor: '#ff4757',
            color: '#fff',
        },
    };

    // Function to handle log out and redirect to the login page
    const handleConfirmLogout = () => {
        // Clear any user data or tokens here (if needed)

        // Redirect to the admin login page
        navigate('/login'); // Assuming '/admin-login' is your admin login route
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <h2 style={styles.popupText}>Are you sure you want to log out?</h2>
                <div style={styles.buttonContainer}>
                    <button
                        style={{ ...styles.button, ...styles.confirmButton }}
                        onClick={handleConfirmLogout} // Handle logout confirmation and redirect
                        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} // Hover effect
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}   // Reset on leave
                    >
                        Yes, Log Out
                    </button>
                    <button
                        style={{ ...styles.button, ...styles.cancelButton }}
                        onClick={onCancel} // Close the popup without logging out
                        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} // Hover effect
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}   // Reset on leave
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutConfirmation;
