import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import ajlogo from '../assets/ajlogo.png';
import proffesionalphoto from '../assets/proffesionalphoto.png';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

import Marquee from 'react-fast-marquee';

import react from '../assets/react-svgrepo-com.svg';
import javascript from '../assets/javascript-svgrepo-com.svg';
import html from '../../src/assets/html-five-svgrepo-com.svg';
import css from '../assets/css-3-svgrepo-com.svg';
import nextjs from '../../src/assets/next-dot-js-svgrepo-com.svg';
import typescript from '../assets/typescript-svgrepo-com.svg';

import nodejs from '../../src/assets/node-js-svgrepo-com.svg';
import express from '../../src/assets/express-svgrepo-com.svg';
import mongodb from '../../src/assets/mongodb-svgrepo-com.svg';
import sql from '../../src/assets/sql-svgrepo-com.svg';
import restful from '../../src/assets/rest-api-svgrepo-com.svg';
import postgresql from '../../src/assets/postgresql-svgrepo-com.svg';
import postgis from '../../src/assets/server-database-svgrepo-com.svg';
import qgis from '../../src/assets/qgis-svgrepo-com.svg';
import php from '../../src/assets/php-svgrepo-com.svg';

import git from '../../src/assets/git-merge-svgrepo-com.svg';
import github from '../../src/assets/github-svgrepo-com.svg';
import docker from '../../src/assets/docker-svgrepo-com.svg';
import aws from '../../src/assets/aws-svgrepo-com.svg';
import jira from '../../src/assets/jira-svgrepo-com.svg';
import vercel from '../../src/assets/vercel-logo-svgrepo-com.svg';
import tensorflow from '../../src/assets/tensorflow-svgrepo-com.svg';
import axios from '../../src/assets/httpshortcuts-svgrepo-com.svg';
import pytorch from '../../src/assets/pytorch-svgrepo-com.svg';

import python from '../../src/assets/python-svgrepo-com.svg';
import c from '../../src/assets/c-program-icon.svg';
import java from '../../src/assets/java-svgrepo-com.svg';
import csharp from '../../src/assets/c-sharp-16-svgrepo-com.svg';

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  const skills = [
    { name: 'React', icon: <img src={react} alt="React" /> },
    { name: 'Node.js', icon: <img src={nodejs} alt="Node.js" /> },
    { name: 'Next.js', icon: <img src={nextjs} alt="Next.js" /> },
    { name: 'TypeScript', icon: <img src={typescript} alt="TypeScript" /> },
    { name: 'JavaScript', icon: <img src={javascript} alt="JavaScript" /> },
    { name: 'SQL', icon: <img src={sql} alt="SQL" /> },
    { name: 'AWS', icon: <img src={aws} alt="AWS" /> },
    { name: 'RESTful APIs', icon: <img src={restful} alt="Firebase" /> },
    { name: 'PostgreSQL', icon: <img src={postgresql} alt="PostgreSQL" /> },
    { name: 'PostGIS', icon: <img src={postgis} alt="PostGIS" /> },
    { name: 'QGIS', icon: <img src={qgis} alt="QGIS" /> },
    { name: 'PHP', icon: <img src={php} alt="PHP" /> },
    { name: 'MongoDB', icon: <img src={mongodb} alt="MongoDB" /> },
    { name: 'Docker', icon: <img src={docker} alt="Docker" /> },
    { name: 'Express', icon: <img src={express} alt="Express" /> },
    { name: 'Python', icon: <img src={python} alt="Python" /> },
    { name: 'C', icon: <img src={c} alt="C" /> },
    { name: 'Java', icon: <img src={java} alt="Java" /> },
    { name: 'C#', icon: <img src={csharp} alt="C#" /> },
    { name: 'Git', icon: <img src={git} alt="Git" /> },
    { name: 'GitHub', icon: <img src={github} alt="GitHub" /> },
    { name: 'Jira', icon: <img src={jira} alt="Jira" /> },
    { name: 'Vercel', icon: <img src={vercel} alt="Vercel" /> },
    { name: 'TensorFlow', icon: <img src={tensorflow} alt="TensorFlow" /> },
    { name: 'Axios', icon: <img src={axios} alt="Axios" /> },
    { name: 'PyTorch', icon: <img src={pytorch} alt="PyTorch" /> },
    { name: 'HTML', icon: <img src={html} alt="HTML" /> },
    { name: 'CSS', icon: <img src={css} alt="CSS" /> },
    
    
    
    
    
    
    
  ];

  const greetings = [
    'Hello',
    'Hola',
    'Bonjour',
    'こんにちは',
    '你好',
    '안녕하세요',
    'Ciao',
    'Hallo',
    'नमस्ते',
    'مرحبا'
  ];

  useEffect(() => {
    // Wait for splash screen to complete (3 seconds) before starting the typing animation
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 3000);

    // Initial delay before starting the greeting cycle
    const initialDelay = setTimeout(() => {
      // Start cycling through greetings
      const greetingInterval = setInterval(() => {
        setCurrentGreeting((prev) => (prev + 1) % greetings.length);
      }, 2000);

      return () => clearInterval(greetingInterval);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(initialDelay);
    };
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
              <div className="greeting-line">
                <span className="greeting">{greetings[currentGreeting]}</span>,
              </div>
              <div className="name-line">
                I'm <span className="name">Amiel</span>
              </div>
            </h1>
            <h2 className="home-subtitle">Full Stack Developer</h2>
            <p className="home-description">
              I build exceptional digital experiences that make a difference.
            </p>
            <div className="skills-marquee">
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover={false}
            direction="left"
          >
            {skills.map((skill, index) => (
              <div key={index} className="skill-item-marquee">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </Marquee>
        </div>
            <div className="social-links">
              <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/amiel-halili" className="social-link" target="_blank" rel="noopener noreferrer">
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
        <div className="home-page">
          <About />
          <Skills />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home; 