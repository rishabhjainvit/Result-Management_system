// src/components/ParentComponent.js
import React, { useState } from 'react';
import StudentSetting from './StudentSetting'; // Import StudentSetting component

const ParentComponent = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <StudentSetting currentTheme={currentTheme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default ParentComponent;
