import React, { useState } from 'react'; // Corrected: Importing useState
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage'; // HomePage should be the first page displayed
import Login from './components/login'; // Login page
import Signup from './components/SignUp'; // SignUp page
import AdminDashboard from './pages/adim-dashboard'; // Corrected file name
import StudentDashboard from './pages/student-dashboard'; // Corrected file name
import Logins from './components/logins'; // Correctly importing the Logins component
import Courses from './pages/courses'; // Import Courses page
import Results from './pages/result'; 
import User from './pages/user'; 
import Reports from './pages/reports'; 
import Settings from './pages/setting'; 
import LogoutConfirmation from './pages/LogoutConfirmation'; 
import StudentSetting from './pages/StudentSetting'; 
import ParentComponent from './pages/ParentComponent'; 
import StudentFeesDashboard from './pages/StudentFeesDashboard'; 
import StudentLogout from './pages/StudentLogout'; 
import GenerateReport from './pages/GenerateReport'; 
import Project from './pages/project';

const App = () => {
  const [reports, setReports] = useState([
      { title: 'System Reports', content: 'Details about the system.' },
      { title: 'User Reports', content: 'Reports about user activities.' },
  ]);

  // Function to add a new report
  const addReport = (newReport) => {
      setReports([...reports, newReport]); // Adds the new report to the array
  };

  // Function to delete a report
  const deleteReport = (indexToDelete) => {
      const updatedReports = reports.filter((_, index) => index !== indexToDelete);
      setReports(updatedReports); // Updates the reports array after deletion
  };


  return (
    <Router>
      <Routes>
        {/* Route for the homepage (first page displayed) */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the logins page */}
        <Route path="/logins" element={<Logins />} />

        {/* Route for the signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Route for the admin dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Route for the student dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Route for the courses page */}
        <Route path="/courses" element={<Courses />} />

        <Route path="/results" element={<Results />} />

        <Route path="/project" element={<Project />} />

        <Route path="/user" element={<User />} />

        {/* <Route path="/reports" element={<Reports />} /> */}

        <Route path="/settings" element={<Settings />} />

        <Route path="/logout" element={<LogoutConfirmation />} />

        <Route path="/StudentSetting" element={<StudentSetting />} />

        <Route path="/ParentComponent" element={<ParentComponent />} />

        <Route path="/StudentFeesDashboard" element={<StudentFeesDashboard />} />

        <Route path="/StudentLogout" element={<StudentLogout />} />

        <Route path="/reports" element={<Reports reports={reports} />} />
        <Route path="/generate-report" element={<GenerateReport addReport={addReport} />} />
      </Routes>
    </Router>
  );
};

export default App;
