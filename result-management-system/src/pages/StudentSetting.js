import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const StudentSetting = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [theme, setTheme] = useState('light');
  const [hoveredButton, setHoveredButton] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      backgroundColor: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
      color: theme === 'dark' ? '#fff' : '#333',
      fontFamily: 'Arial, sans-serif',
      transition: 'background-color 0.5s, color 0.5s',
    },
    sidebar: {
      width: '250px',
      backgroundColor: theme === 'dark' ? '#333' : '#ddd',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: theme === 'dark' ? '2px 0 5px rgba(0, 0, 0, 0.5)' : '2px 0 5px rgba(200, 200, 200, 0.5)',
    },
    sidebarItem: (isHovered) => ({
      marginBottom: '20px',
      padding: '15px 20px',
      backgroundColor: isHovered ? (theme === 'dark' ? '#555' : '#bbb') : (theme === 'dark' ? '#444' : '#ccc'),
      color: '#fff',
      borderRadius: '8px',
      textAlign: 'center',
      cursor: 'pointer',
      width: '100%',
      transition: 'background 0.3s, transform 0.3s',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
    }),
    content: {
      flexGrow: 1,
      padding: '40px',
      backgroundColor: theme === 'dark' ? '#262626' : '#f9f9f9',
      overflowY: 'auto',
      transition: 'background-color 0.5s',
    },
    header: {
      fontSize: '28px',
      marginBottom: '30px',
      textAlign: 'center',
      color: theme === 'dark' ? '#fff' : '#333',
    },
    section: {
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      borderRadius: '10px',
      boxShadow: theme === 'dark' ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(200, 200, 200, 0.3)',
      color: theme === 'dark' ? '#fff' : '#333',
    },
    sectionTitle: {
      fontSize: '20px',
      marginBottom: '10px',
      borderBottom: '2px solid',
      borderBottomColor: theme === 'dark' ? '#555' : '#ccc',
      paddingBottom: '5px',
    },
    button: {
      padding: '12px 24px',
      backgroundColor: hoveredButton
        ? theme === 'dark'
          ? '#666'
          : '#ccc'
        : theme === 'dark'
        ? '#555'
        : '#ddd',
      color: hoveredButton
        ? theme === 'dark'
          ? '#eee'
          : '#222'
        : theme === 'dark'
        ? '#fff'
        : '#333',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s, transform 0.3s',
      marginTop: '20px',
      transform: hoveredButton ? 'scale(1.05)' : 'scale(1)',
      boxShadow: hoveredButton
        ? '0 8px 16px rgba(0, 0, 0, 0.3)'
        : '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    themeInfo: {
      fontSize: '16px',
      color: theme === 'dark' ? '#ccc' : '#555',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        {['Profile', 'Courses', 'Results', 'Project', 'Setting', 'Fees', 'Logout'].map((item, index) => (
          <div
            key={index}
            style={styles.sidebarItem(hoveredItem === index)}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => {
              if (item === 'Profile') navigate('/student-dashboard');
              if (item === 'Courses') navigate('/courses');
              if (item === 'Results') navigate('/results');
              if (item === 'Project') navigate('/project');
              if (item === 'Setting') navigate('/settings');
              if (item === 'Fees') navigate('/StudentFeesDashboard');
              if (item === 'Logout') navigate('/logout');
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={styles.content}>
        <div style={styles.header}>Settings</div>

        {/* Theme Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Theme Options</div>
          <button
            style={styles.button}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            onClick={toggleTheme}
          >
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
          </button>
          <div style={styles.themeInfo}>Current Theme: {theme === 'dark' ? 'Dark' : 'Light'}</div>
        </div>

        {/* Notifications Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Notifications</div>
          <p>Manage your notification preferences for emails and system alerts.</p>
        </div>

        {/* Account Management Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Account Management</div>
          <p>Update your personal information and change your password here.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentSetting;
