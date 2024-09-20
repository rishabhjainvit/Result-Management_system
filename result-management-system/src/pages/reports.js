import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reports = ({ reports, deleteReport }) => {
    const navigate = useNavigate();
    const [hoveredItem, setHoveredItem] = useState(null); // To handle hover state
    const [showLogoutPopup, setShowLogoutPopup] = useState(false); // For logout popup confirmation

    const styles = {
        dashboardContainer: {
            display: 'flex',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#1e272e',
        },
        sidebar: {
            width: '250px',
            backgroundColor: '#2f3542',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        sidebarItem: (isActive) => ({
            color: isActive ? '#3498db' : '#fff',
            padding: '15px',
            fontSize: '18px',
            cursor: 'pointer',
            textAlign: 'center',
            borderBottom: '1px solid #57606f',
            backgroundColor: isActive ? '#2c3e50' : 'transparent',
            transition: 'background 0.3s ease, color 0.3s ease',
        }),
        sidebarItemHover: {
            backgroundColor: '#34495e',
            color: '#fff',
        },
        content: {
            flex: 1,
            padding: '40px',
            backgroundColor: '#1e272e',
            color: '#f1f2f6',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        header: {
            fontSize: '36px',
            color: '#f1f2f6',
            textAlign: 'center',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
        },
        card: {
            backgroundColor: '#2f3640',
            padding: '20px',
            margin: '20px 0',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '80%',
            maxWidth: '800px',
            margin: '20px auto',
            position: 'relative',
        },
        cardTitle: {
            fontSize: '24px',
            marginBottom: '10px',
            color: '#f1f2f6',
        },
        button: {
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#3742fa',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
            transition: 'background 0.3s ease, transform 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#57606f',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: '20px',
        },
        deleteButton: {
            padding: '5px 10px',
            fontSize: '12px',
            backgroundColor: '#ff4757',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            position: 'absolute',
            top: '10px',
            right: '10px',
        },
        logoutPopup: {
            backgroundColor: '#2f3640',
            color: '#f1f2f6',
            padding: '20px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: '1000',
        },
    };

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const goToUsers = () => navigate('/user');
    const goToSettings = () => navigate('/settings');
    const goToReports = () => navigate('/reports');

    const handleLogout = () => {
        setShowLogoutPopup(true); // Show logout confirmation popup
    };

    const confirmLogout = () => {
        setShowLogoutPopup(false);
        navigate('/logout'); // Proceed to logout after confirmation
    };

    const cancelLogout = () => {
        setShowLogoutPopup(false); // Close popup if user cancels
    };

    return (
        <div style={styles.dashboardContainer}>
            {/* Sidebar */}
            <div style={styles.sidebar}>
                {['Dashboard', 'Users', 'Reports', 'Settings', 'Logout'].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.sidebarItem(false),
                            ...(hoveredItem === index ? styles.sidebarItemHover : {}),
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={
                            item === 'Users'
                                ? goToUsers
                                : item === 'Reports'
                                ? goToReports
                                : item === 'Settings'
                                ? goToSettings
                                : item === 'Logout'
                                ? handleLogout
                                : null
                        }
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div style={styles.content}>
                <h1 style={styles.header}>Reports</h1>

                {/* Render the list of reports dynamically */}
                {reports.map((report, index) => (
                    <div key={index} style={styles.card}>
                        <h2 style={styles.cardTitle}>{report.title}</h2>
                        <p>{report.content}</p>
                        {/* Delete Button */}
                        {/* <button
                            style={styles.deleteButton}
                            onClick={() => deleteReport(index)} // Call deleteReport function
                        >
                            Delete
                        </button> */}
                    </div>
                ))}

                {/* Button to navigate to generate new report page */}
                <div style={styles.buttonContainer}>
                    <button
                        style={styles.button}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                        onClick={() => handleNavigation('/generate-report')}
                    >
                        Generate New Report
                    </button>
                </div>
            </div>

            {/* Logout Popup */}
            {showLogoutPopup && (
                <div style={styles.logoutPopup}>
                    <p>Are you sure you want to log out?</p>
                    <button onClick={confirmLogout} style={styles.button}>Yes</button>
                    <button onClick={cancelLogout} style={styles.button}>No</button>
                </div>
            )}
        </div>
    );
};

export default Reports;
