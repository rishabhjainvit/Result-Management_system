import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // Add state for logout popup
  const navigate = useNavigate(); // Initialize useNavigate

  // Sample data for results
  const results = [
    {
      course: 'Web Development',
      grade: 'A',
      percentage: '92%',
      status: 'Completed',
    },
    {
      course: 'Data Structures',
      grade: 'B+',
      percentage: '87%',
      status: 'Completed',
    },
    {
      course: 'Algorithms',
      grade: 'A+',
      percentage: '96%',
      status: 'Completed',
    },
    {
      course: 'Database Management',
      grade: 'B',
      percentage: '81%',
      status: 'Ongoing',
    },
  ];

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
    },
    resultCard: {
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: '#333',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    },
    resultTitle: {
      fontSize: '20px',
      marginBottom: '10px',
      borderBottom: '2px solid #444',
      paddingBottom: '5px',
    },
    resultDetail: {
      fontSize: '16px',
      marginBottom: '10px',
    },
    resultStatus: {
      fontSize: '14px',
      color: '#ccc',
    },
    logoutPopup: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#333',
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
      color: '#fff',
    },
    cancelButton: {
      backgroundColor: '#f44336', // Red
    },
    confirmButton: {
      backgroundColor: '#4CAF50', // Green
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
    }
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
              } 
              else if (item === 'Courses') {
                navigate('/courses');
              } else if (item === 'Results') {
                navigate('/results');
              } else if (item === 'Project') {
                navigate('/project');
              } else if (item === 'Setting') {
                navigate('/StudentSetting');
              } else if (item === 'Fees') {
                navigate('/StudentFeesDashboard');
              } else if(item === 'Profile'){
                navigate('/student-dashboard')
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main content for results */}
      <div style={styles.content}>
        <div style={styles.header}>My Results</div>
        {results.map((result, index) => (
          <div key={index} style={styles.resultCard}>
            <div style={styles.resultTitle}>{result.course}</div>
            <div style={styles.resultDetail}>Grade: {result.grade}</div>
            <div style={styles.resultDetail}>Percentage: {result.percentage}</div>
            <div style={styles.resultStatus}>Status: {result.status}</div>
          </div>
        ))}
      </div>

      {/* Logout confirmation popup */}
      {showLogoutPopup && (
        <>
          <div style={styles.overlay} onClick={handleCancelLogout} />
          <div style={styles.logoutPopup}>
            <p>Are you sure you want to logout?</p>
            <button style={{ ...styles.popupButton, ...styles.cancelButton }} onClick={handleCancelLogout}>
              Cancel
            </button>
            <button style={{ ...styles.popupButton, ...styles.confirmButton }} onClick={handleConfirmLogout}>
              Confirm
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
