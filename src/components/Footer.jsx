import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('amieljeremiahhalili@gmail.com');
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Amiel Halili. Built with care.
        </p>
        <div className="footer-icons">
          <button
            onClick={handleEmailClick}
            className="footer-icon email-button"
            title="Copy email to clipboard"
          >
            <FaEnvelope />
            {showTooltip && <span className="tooltip">Email copied!</span>}
          </button>
          <a
            href="https://github.com/amielhalili"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amiel-halili"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/aj.halili"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
