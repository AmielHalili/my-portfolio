import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Amiel Halili. All rights reserved.
        </p>
        <div className="footer-icons">
          <a
            href="mailto:amiel.halili@gmail.com"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/amielhalili"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/amielhalili"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/amielhalili"
            className="footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 