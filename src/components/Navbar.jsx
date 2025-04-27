import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';
import ajlogo from '../assets/ajlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <img src={ajlogo} alt="AJ Logo" className="home-logo" />
            <span>amiel.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mobile-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 