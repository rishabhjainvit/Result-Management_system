import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Settings = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null); // For hover effect
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // For logout confirmation
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Toggle between dark and light theme
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // Handle navigation to different routes
  const goToUsers = () => navigate('/user');
  const goToSettings = () => navigate('/settings');
  const goToReports = () => navigate('/reports');

  // Handle logout functionality
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

  // Hover effect functions
  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // Dynamic styles based on theme
  const styles = {
    dashboardContainer: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      backgroundColor: darkTheme ? '#1e272e' : '#f1f2f6', // Dark/Light theme background
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
      transform: isHovered ? 'scale(1.05)' : 'none',
    }),
    sidebarItemHover: {
      backgroundColor: '#3742fa',
      transform: 'scale(1.05)',
    },
    content: {
      flex: 1,
      padding: '40px',
      backgroundColor: darkTheme ? '#1e272e' : '#f1f2f6',
      color: darkTheme ? '#f1f2f6' : '#2f3640',
      overflowY: 'auto',
    },
    header: {
      fontSize: '36px',
      textAlign: 'center',
      marginBottom: '20px',
      color: darkTheme ? '#f1f2f6' : '#2f3640',
    },
    card: {
      backgroundColor: darkTheme ? '#2f3640' : '#dfe6e9',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    cardTitle: {
      fontSize: '24px',
      marginBottom: '10px',
      color: darkTheme ? '#f1f2f6' : '#2f3640',
    },
    toggleButton: {
      padding: '10px 20px',
      backgroundColor: darkTheme ? '#3742fa' : '#0984e3',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    option: {
      fontSize: '18px',
      margin: '10px 0',
      cursor: 'pointer',
    },
    popup: {
      backgroundColor: '#fff',
      padding: '20px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
    },
    popupButton: {
      padding: '10px 20px',
      margin: '10px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {['Dashboard', 'Users', 'Reports', 'Settings', 'Logout'].map((item, index) => (
          <div
            key={index}
            style={styles.sidebarItem(hoveredItem === index)}
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
        <h1 style={styles.header}>Settings</h1>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Theme Settings</h2>
          <p>Switch between dark and light themes for the dashboard.</p>
          <button style={styles.toggleButton} onClick={toggleTheme}>
            {darkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          </button>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Notification Settings</h2>
          <div style={styles.option}>
            <input type="checkbox" id="emailNotifications" />
            <label htmlFor="emailNotifications"> Enable Email Notifications</label>
          </div>
          <div style={styles.option}>
            <input type="checkbox" id="smsNotifications" />
            <label htmlFor="smsNotifications"> Enable SMS Notifications</label>
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Account Settings</h2>
          <p>Update your account details and manage security settings.</p>
        </div>
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div style={styles.popup}>
          <h3>Are you sure you want to logout?</h3>
          <button style={styles.popupButton} onClick={confirmLogout}>
            Yes
          </button>
          <button style={styles.popupButton} onClick={cancelLogout}>
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Settings;
