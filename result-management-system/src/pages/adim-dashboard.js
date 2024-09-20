import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutConfirmation from './LogoutConfirmation';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State to handle logout popup visibility

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
            transition: 'width 0.3s ease',
        },
        sidebarItem: {
            color: '#fff',
            padding: '15px',
            fontSize: '18px',
            cursor: 'pointer',
            textAlign: 'center',
            borderBottom: '1px solid #57606f',
            transition: 'background 0.3s ease, transform 0.2s ease',
        },
        sidebarItemHover: {
            backgroundColor: '#3742fa',
            transform: 'scale(1.05)',
        },
        content: {
            flex: 1,
            padding: '40px',
            backgroundColor: '#1e272e',
            color: '#f1f2f6',
            overflowY: 'auto',
        },
        header: {
            fontSize: '36px',
            color: '#f1f2f6',
            textAlign: 'center',
            marginBottom: '20px',
        },
        card: {
            backgroundColor: '#2f3640',
            padding: '20px',
            margin: '20px 0',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        cardTitle: {
            fontSize: '24px',
            marginBottom: '10px',
            color: '#f1f2f6',
        },
    };

    const [hoveredItem, setHoveredItem] = useState(null); // To handle hover state

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
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
                            ...styles.sidebarItem,
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
                <h1 style={styles.header}>Admin Dashboard</h1>

                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>User Management</h2>
                    <p>Manage all users here, view their activity, and update their roles.</p>
                </div>

                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>Reports Overview</h2>
                    <p>View system usage reports and activity logs to stay updated.</p>
                </div>

                <div style={styles.card}>
                    <h2 style={styles.cardTitle}>Settings</h2>
                    <p>Update your dashboard settings or modify admin privileges.</p>
                </div>
            </div>

            {/* Logout Confirmation Popup */}
            {showLogoutPopup && (
                <LogoutConfirmation
                    show={showLogoutPopup}
                    onConfirm={confirmLogout}
                    onCancel={cancelLogout}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
