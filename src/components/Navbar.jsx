import React from 'react';
import '../styles/Navbar.css';
import ajlogo from '../assets/ajlogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <span className="brand-dot" aria-hidden="true"></span>
          <span className="brand-name">amiel.</span>
          <img src={ajlogo} alt="Amiel Halili logo" className="home-logo" />
        </div>
        <div className="navbar-meta">
          <span className="meta-pill">Portfolio 2026</span>
          <span className="meta-pill subtle">Open to internships & freelance</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
