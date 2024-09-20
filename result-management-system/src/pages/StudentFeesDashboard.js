import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentFeesDashboard = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State to show/hide logout popup
  const navigate = useNavigate(); // Hook for navigation

  // Sample fee data
  const feeDetails = {
    totalFees: '₹100,000',
    paidFees: '₹70,000',
    dueFees: '₹30,000',
    lastPaidDate: '15th August 2024',
    nextDueDate: '15th October 2024',
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      backgroundColor: '#1f1f1f',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#333',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
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
    },
    header: {
      fontSize: '28px',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#fff',
    },
    section: {
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: '#333',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      color: '#fff',
    },
    sectionTitle: {
      fontSize: '24px',
      marginBottom: '10px',
      borderBottom: '2px solid #444',
      paddingBottom: '5px',
    },
    sectionContent: {
      fontSize: '16px',
    },
    feeInfo: {
      marginBottom: '10px',
    },
    feeLabel: {
      fontWeight: 'bold',
    },
    logoutPopup: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      color: '#000',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
    },
    popupButton: {
      margin: '10px',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
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
    navigate('/student-login'); // Redirect to login page after logout
  };

  return (
    <div style={styles.container}>
      {/* Sidebar with navigation */}
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
              } else if (item === 'Profile') {
                navigate('/student-dashboard');
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main content for the dashboard */}
      <div style={styles.content}>
        <div style={styles.header}>Fees Dashboard</div>

        {/* Fee Details Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Fee Details</div>
          <div style={styles.sectionContent}>
            <div style={styles.feeInfo}>
              <span style={styles.feeLabel}>Total Fees:</span> {feeDetails.totalFees}
            </div>
            <div style={styles.feeInfo}>
              <span style={styles.feeLabel}>Paid Fees:</span> {feeDetails.paidFees}
            </div>
            <div style={styles.feeInfo}>
              <span style={styles.feeLabel}>Due Fees:</span> {feeDetails.dueFees}
            </div>
            <div style={styles.feeInfo}>
              <span style={styles.feeLabel}>Last Paid Date:</span> {feeDetails.lastPaidDate}
            </div>
            <div style={styles.feeInfo}>
              <span style={styles.feeLabel}>Next Due Date:</span> {feeDetails.nextDueDate}
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div style={styles.logoutPopup}>
          <p>Are you sure you want to log out?</p>
          <button style={{ ...styles.popupButton, backgroundColor: '#4CAF50', color: '#fff' }} onClick={handleConfirmLogout}>Yes</button>
          <button style={{ ...styles.popupButton, backgroundColor: '#f44336', color: '#fff' }} onClick={handleCancelLogout}>No</button>
        </div>
      )}
    </div>
  );
};

export default StudentFeesDashboard;
