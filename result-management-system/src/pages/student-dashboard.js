import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import StudentLogout from './StudentLogout'; // Import the StudentLogout component

const StudentDashboard = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State to control popup visibility
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      width: '100vw', // Ensure the container covers the full width of the viewport
      backgroundColor: '#1f1f1f',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      margin: 0, // Remove any margin
      padding: 0, // Remove any padding
      overflow: 'hidden',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#333',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
      animation: 'slideInLeft 0.5s ease-in-out', // Sidebar slide-in animation
    },
    sidebarItem: (isHovered) => ({
      marginBottom: '20px',
      padding: '15px 20px',
      backgroundColor: isHovered ? '#555' : '#444',
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
      backgroundColor: '#262626',
      overflowY: 'auto',
      animation: 'fadeIn 1s ease-in-out', // Content fade-in animation
    },
    header: {
      fontSize: '28px',
      marginBottom: '30px',
      textAlign: 'center',
      animation: 'slideDown 0.8s ease', // Header slide-down animation
    },
    section: {
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: '#333',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      animation: 'zoomIn 0.8s ease', // Section zoom-in animation
    },
    sectionTitle: {
      fontSize: '20px',
      marginBottom: '15px',
      borderBottom: '2px solid #444',
      paddingBottom: '10px',
    },
    // Animations
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    '@keyframes slideDown': {
      from: { transform: 'translateY(-20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    '@keyframes zoomIn': {
      from: { transform: 'scale(0.9)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 },
    },
    '@keyframes slideInLeft': {
      from: { transform: 'translateX(-250px)', opacity: 0 },
      to: { transform: 'translateX(0)', opacity: 1 },
    },
  };

  const handleLogout = () => {
    setShowLogoutPopup(true); // Show logout confirmation popup
  };

  const handleCancelLogout = () => {
    setShowLogoutPopup(false); // Hide logout confirmation popup
  };

  const handleConfirmLogout = () => {
    // Implement logout logic here (e.g., clear tokens, etc.)
    setShowLogoutPopup(false); // Hide logout confirmation popup
    //Redirect to login page if needed
     navigate('/student-login'); // Uncomment if you want to redirect after logout
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        {['Profile', 'Courses', 'Results', 'Project', 'Setting', 'Fees', 'Logout'].map((item, index) => (
          <div
            key={index}
            style={styles.sidebarItem(hoveredItem === index)}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => {
              if (item === 'Logout') {
                handleLogout();
              } else if (item === 'Courses') {
                navigate('/courses');
              } else if (item === 'Results') {
                navigate('/results');
              } else if (item === 'Project') {
                navigate('/project');
              } else if (item === 'Setting') {
                navigate('/StudentSetting');
              } else if (item === 'Fees') {
                navigate('/StudentFeesDashboard');
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div style={styles.content}>
        <div style={styles.header}>Welcome Rishabh!</div>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Profile Information</div>
          <p>Name: Rishabh Jain</p>
          <p>Enrollment No: 12345678</p>
        </div>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Current Courses</div>
          <p>Course 1: Web Development</p>
          <p>Course 2: Data Structures</p>
        </div>
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Results</div>
          <p>Web Development: A</p>
          <p>Data Structures: B+</p>
        </div>
      </div>

      <StudentLogout
        show={showLogoutPopup}
        onCancel={handleCancelLogout}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
};

export default StudentDashboard;
