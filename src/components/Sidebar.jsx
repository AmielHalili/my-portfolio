import React, { useState } from 'react';
import '../styles/Sidebar.css';
import ajlogo from '../assets/ajlogo.png';
import resume from '../assets/HaliliAmiel_UCF_2025.pdf';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { IoIosDocument } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('str8lanes@gmail.com');
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
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
              <li><a href="https://github.com/AmielHalili" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/amiel-halili" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></li>
              <li><a href="https://www.instagram.com/aj.halili" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
              <li><a href={resume} target="_blank" rel="noopener noreferrer"><IoIosDocument /> Resume</a></li>
              <li>
                <button onClick={handleEmailClick} className="sidebar-email-button">
                  <FaEnvelope /> Send Email
                  {showTooltip && <span className="sidebar-tooltip">Email copied!</span>}
                </button>
              </li>
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