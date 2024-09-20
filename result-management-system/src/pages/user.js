import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

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

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

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
        sidebarItem: (isHovered) => ({
            color: '#fff',
            padding: '15px',
            fontSize: '18px',
            cursor: 'pointer',
            textAlign: 'center',
            borderBottom: '1px solid #57606f',
            backgroundColor: isHovered ? '#3742fa' : '#2f3542',
            transition: 'background 0.3s ease, transform 0.2s ease',
        }),
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
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
        },
        userList: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
        },
        userCard: {
            backgroundColor: '#2f3640',
            padding: '30px',
            marginBottom: '20px',
            borderRadius: '15px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
            width: '70%',
            maxWidth: '800px',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
        },
        userImage: {
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            marginRight: '20px',
        },
        userName: {
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#f1f2f6',
        },
        userEmail: {
            fontSize: '18px',
            color: '#dcdde1',
        },
        viewProfileButton: {
            marginLeft: 'auto',
            padding: '10px 20px',
            backgroundColor: '#3742fa',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
    };

    const users = [
        { name: 'John Doe', email: 'john.doe@example.com', image: 'https://via.placeholder.com/80' },
        { name: 'Jane Smith', email: 'jane.smith@example.com', image: 'https://via.placeholder.com/80' },
        { name: 'Robert Johnson', email: 'robert.johnson@example.com', image: 'https://via.placeholder.com/80' },
    ];

    const viewProfile = (userName) => {
        navigate(`/profile/${userName}`);
    };

    return (
        <div style={styles.dashboardContainer}>
            {/* Sidebar */}
            <div style={styles.sidebar}>
                {['Dashboard', 'Users', 'Reports', 'Settings', 'Logout'].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.sidebarItem(hoveredItem === index),
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
                <h1 style={styles.header}>User Management</h1>
                <div style={styles.userList}>
                    {users.map((user, index) => (
                        <div
                            key={index}
                            style={styles.userCard}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        >
                            <img src={user.image} alt={user.name} style={styles.userImage} />
                            <div>
                                <h2 style={styles.userName}>{user.name}</h2>
                                <p style={styles.userEmail}>{user.email}</p>
                            </div>
                            <button
                                style={styles.viewProfileButton}
                                onClick={() => viewProfile(user.name)}
                            >
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default User;
