import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import ajlogo from '../assets/ajlogo.png';
import resume from '../assets/HaliliAmiel_UCF_2025.pdf';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { IoIosDocument } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

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

  const handleNavigation = (sectionId) => {
    navigate('/', { state: { scrollTo: sectionId } });
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button
        type="button"
        className={`sidebar-trigger ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar} aria-hidden="true" />}
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="navigation-section">
            <h3>Navigation</h3>
            <ul>
              <li><a onClick={() => handleNavigation('about')}>About</a></li>
              <li><a onClick={() => handleNavigation('skills')}>Skills</a></li>
              <li><a onClick={() => handleNavigation('experience')}>Experience</a></li>
              <li><a onClick={() => handleNavigation('projects')}>Projects</a></li>
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
            <button type="button" onClick={handleLogoClick} aria-label="Go to home">
              <img src={ajlogo} alt="AJ Logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 
