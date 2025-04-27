import React, { useState } from 'react';
import '../styles/Sidebar.css';
import ajlogo from '../assets/ajlogo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close sidebar after clicking
    }
  };

  return (
    <>
      <div className={`sidebar-trigger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="navigation-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            </ul>
          </div>
          
          <div className="social-section">
            <h3>Connect</h3>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
          </div>

          <div className="sidebar-logo">
            <img src={ajlogo} alt="AJ Logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 