import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import ajlogo from '../assets/ajlogo.png';
import proffesionalphoto from '../assets/proffesionalphoto.png';

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Wait for splash screen to complete (3 seconds) before starting the typing animation
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-section">
      <div className="home-content">
        <div className="home-layout">
          <div className="logo-container">
            <img src={ajlogo} alt="AJ Logo" className="home-logo" />
          </div>
          <div className="text-content">
            <h1 className="home-title" style={{ display: showTitle ? 'block' : 'none' }}>
              Hi, I'm <span>Amiel</span>
            </h1>
            <h2 className="home-subtitle">Full Stack Developer</h2>
            <p className="home-description">
              I build exceptional digital experiences that make a difference.
            </p>
            <div className="social-links">
              <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-picture-container">
            <img src={proffesionalphoto} alt="Professional Photo" className="home-profile-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 