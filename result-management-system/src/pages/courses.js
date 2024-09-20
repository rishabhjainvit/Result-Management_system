import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Courses = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // Add state for logout popup
  const navigate = useNavigate(); // Initialize useNavigate

  // Sample data for courses
  const courses = [
    {
      name: 'Web Development',
      description: 'Learn HTML, CSS, JavaScript, and React.js',
      instructor: 'John Doe',
      status: 'Ongoing',
    },
    {
      name: 'Data Structures',
      description: 'Master data structures using C++ and Python',
      instructor: 'Jane Smith',
      status: 'Completed',
    },
    {
      name: 'Algorithms',
      description: 'Learn algorithms and problem-solving techniques',
      instructor: 'David Green',
      status: 'Ongoing',
    },
    {
      name: 'Database Management',
      description: 'Understand SQL, NoSQL, and database design',
      instructor: 'Michael Brown',
      status: 'Upcoming',
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
    courseCard: {
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: '#333',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    },
    courseTitle: {
      fontSize: '20px',
      marginBottom: '10px',
      borderBottom: '2px solid #444',
      paddingBottom: '5px',
    },
    courseDescription: {
      fontSize: '16px',
      marginBottom: '10px',
    },
    courseStatus: {
      fontSize: '14px',
      color: '#ccc',
    },
    popup: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      color: '#000',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
    // Redirect to login page if needed
    // navigate('/student-login'); // Uncomment if you want to redirect after logout
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
              }else if(item === 'Profile'){
                navigate('/student-dashboard')
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>
      {/* Main content for courses */}
      <div style={styles.content}>
        <div style={styles.header}>My Courses</div>
        {courses.map((course, index) => (
          <div key={index} style={styles.courseCard}>
            <div style={styles.courseTitle}>{course.name}</div>
            <div style={styles.courseDescription}>{course.description}</div>
            <div style={styles.courseStatus}>Instructor: {course.instructor}</div>
            <div style={styles.courseStatus}>Status: {course.status}</div>
          </div>
        ))}
      </div>

      {/* Logout confirmation popup */}
      {showLogoutPopup && (
        <div style={styles.popup}>
          <p>Are you sure you want to logout?</p>
          <button style={styles.popupButton} onClick={handleConfirmLogout}>Logout</button>
          <button style={styles.popupButton} onClick={handleCancelLogout}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Courses;
