import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('admin'); // Default role is admin
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Call API to verify login
      const response = await axios.post('http://localhost:5000/api/login', {
        role,
        username,
        password,
        email,
        phone,
      });

      console.log('Login response:', response.data); // Logging the response for debugging

      // Check if login is successful, adjust this condition as per your API response structure
      if (response.status === 200) {
        // Navigate based on the role selected
        if (role === 'admin') {
          navigate('/admin-dashboard'); // Navigating to admin dashboard
        } else if (role === 'student') {
          navigate('/student-dashboard'); // Navigating to student dashboard
        } else {
          alert('Invalid role');
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
    }
  };

  // Inline CSS styles (same as previous)
  const styles = {
    body: {
      fontFamily: "'Roboto', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: '#1e272e',
      color: '#ecf0f1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    pageContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
      maxWidth: '1200px',
      padding: '20px',
    },
    formContainer: {
      flex: '1 1 0%',
      backgroundColor: 'rgb(47, 54, 64)',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 16px',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '0px',
      width: '400px',
    },
    h1: {
      fontSize: '36px',
      color: '#ecf0f1',
      marginBottom: '20px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '15px',
      margin: '10px 0',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#353b48',
      color: '#fff',
      fontSize: '16px',
      outline: 'none',
    },
    button: {
      width: '100%',
      backgroundColor: '#8c7ae6',
      color: 'white',
      border: 'none',
      padding: '15px',
      borderRadius: '25px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginTop: '20px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.pageContainer}>
        <div style={styles.formContainer}>
          <h1 style={styles.h1}>Admin Login</h1>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />
          <button onClick={() => navigate('/admin-dashboard')} >LOGIN</button>

        </div>
      </div>
    </div>
  );
};

export default Login;
