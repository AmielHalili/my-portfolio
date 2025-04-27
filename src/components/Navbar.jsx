import React from 'react';
import '../styles/Navbar.css';
import ajlogo from '../assets/ajlogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          
          <span>amiel.</span>
          <img src={ajlogo} alt="AJ Logo" className="home-logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 