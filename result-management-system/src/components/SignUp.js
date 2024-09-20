import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [role, setRole] = useState('admin');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        role,
        username,
        password,
        email,
        phone,
      });

      if (response.data.success) {
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'student') {
          navigate('/student-dashboard');
        }
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      alert('Error signing up');
    }
  };

  // Inline CSS styles
  
  
  return (
    <div style={styles.body}>
      <div style={styles.pageContainer}>
        <div style={styles.formContainer}>
          <h1 style={styles.h1}>Sign Up</h1>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{ ...styles.input }}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ ...styles.input }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ ...styles.input }}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ ...styles.input }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...styles.input }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ ...styles.input }}
          />
          <button onClick={handleSignup} style={styles.button}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};


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
        position: 'relative',
        animation: '1s ease-out slideIn',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '-635pxpx', // This will center the container
        // marginRight: 'auto', // This will center the container
        width: '400px', // Set a fixed width for the form
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
      transition: 'all 0.3s ease',
    },
    inputFocus: {
      backgroundColor: '#485460',
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
    buttonHover: {
      backgroundColor: '#6c5ce7',
    },
    textInfo: {
      marginTop: '20px',
      textAlign: 'center',
      fontSize: '18px',
      color: '#ecf0f1',
    },
    textLink: {
      color: '#8c7ae6',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    textLinkHover: {
      color: '#9c88ff',
      textDecoration: 'underline',
    },
    imageContainer: {
      flex: 1,
      maxWidth: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'fadeIn 2s ease-in',
    },
    illustration: {
      width: '80%',
      height: 'auto',
      transition: 'transform 0.5s ease',
    },
    illustrationHover: {
      transform: 'scale(1.05)',
    },
  };
export default Signup;
