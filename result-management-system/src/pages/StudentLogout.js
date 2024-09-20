import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const StudentLogout = ({ show, onCancel, onConfirm }) => {
    const navigate = useNavigate(); // Initialize navigate for redirection

    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Light black background
            display: show ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            animation: show ? 'fadeIn 0.5s ease' : '', // Fade-in animation
        },
        popup: {
            backgroundColor: '#333', // Light black background for the popup
            color: '#f1f2f6',
            padding: '30px',
            borderRadius: '12px', // Slightly larger border radius for a smoother look
            width: '400px', // Slightly larger width for more space
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)', // Enhanced shadow for depth
            textAlign: 'center',
            animation: show ? 'popupAnimation 0.5s ease' : '', // Popup animation
        },
        popupText: {
            fontSize: '20px', // Larger font size for better readability
            marginBottom: '15px', // Added margin for spacing
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between', // Better spacing between buttons
            marginTop: '20px',
        },
        button: {
            padding: '12px 24px', // Increased padding for a better click area
            border: 'none',
            borderRadius: '8px', // Slightly larger border radius for buttons
            fontSize: '18px', // Larger font size for better readability
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', // Added shadow transition
        },
        confirmButton: {
            backgroundColor: '#3498db', // Bright blue for confirmation
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Added shadow for depth
        },
        cancelButton: {
            backgroundColor: '#e74c3c', // Red for cancel
            color: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Added shadow for depth
        },
    };

    // Function to handle log out and redirect to the student login page
    const handleConfirmLogout = () => {
        // Call the onConfirm prop function to handle additional logic if needed
        if (onConfirm) {
            onConfirm();
        }
        // Redirect to the student login page
        navigate('/logins'); // Assuming '/student-login' is your student login route
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

export default StudentLogout;
