
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} aria-label="Toggle dark mode">
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      
      <style>
        {`
        .theme-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 999;
        }
        
        .theme-toggle button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--dark);
          border: 2px solid var(--gold);
          color: var(--gold);
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .theme-toggle button:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        body[data-theme='light'] {
          --dark: #F2F2F2;
          --light: #121212;
          --gray: #666666;
        }
        
        body[data-theme='light'] .navbar,
        body[data-theme='light'] .navbar.scrolled {
          background-color: var(--dark);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        body[data-theme='light'] .footer {
          background-color: #E0E0E0;
        }
        
        body[data-theme='light'] .theme-toggle button {
          background-color: var(--light);
          color: var(--gold);
        }
        `}
      </style>
    </div>
  );
};

export default ThemeToggle;
