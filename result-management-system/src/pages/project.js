import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Sample projects and student information
  const projects = [
    { title: 'Project A', description: 'A description of Project A', status: 'Completed' },
    { title: 'Project B', description: 'A description of Project B', status: 'In Progress' },
    { title: 'Project C', description: 'A description of Project C', status: 'Pending' },
  ];

  const studentInfo = {
    name: 'John Doe',
    id: 'S123456',
    course: 'Computer Science',
    year: '4th Year',
    email: 'john.doe@example.com',
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
    projectCard: {
      marginBottom: '10px',
      padding: '15px',
      backgroundColor: '#444',
      borderRadius: '8px',
    },
    projectTitle: {
      fontSize: '18px',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    projectDescription: {
      fontSize: '14px',
      marginBottom: '5px',
    },
    projectStatus: {
      fontSize: '14px',
      fontStyle: 'italic',
    },
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
                // Handle logout logic here (if needed)
              } else if (item === 'Profile') {
                navigate('/student-dashboard');
              } else if (item === 'Courses') {
                navigate('/courses');
              } else if (item === 'Results') {
                navigate('/results');
              } else if (item === 'Project') {
                navigate('/project');
              } else if (item === 'Setting') {
                navigate('/StudentSetting  ');
              } else if (item === 'Fees') {
                navigate('/StudentFeesDashboard');
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main content for the dashboard */}
      <div style={styles.content}>
        <div style={styles.header}>Projects</div>

        {/* Student Information Section */}
        {/* <div style={styles.section}>
          <div style={styles.sectionTitle}>Student Information</div>
          <div style={styles.sectionContent}>
            <p><strong>Name:</strong> {studentInfo.name}</p>
            <p><strong>ID:</strong> {studentInfo.id}</p>
            <p><strong>Course:</strong> {studentInfo.course}</p>
            <p><strong>Year:</strong> {studentInfo.year}</p>
            <p><strong>Email:</strong> {studentInfo.email}</p>
          </div>
        </div> */}

        {/* Projects Section */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Projects</div>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <div style={styles.projectTitle}>{project.title}</div>
              <div style={styles.projectDescription}>{project.description}</div>
              <div style={styles.projectStatus}><strong>Status:</strong> {project.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
