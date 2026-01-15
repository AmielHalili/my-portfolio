import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Home.css';
import ajlogo from '../assets/ajlogo.png';
import proffessionalphoto from '../assets/proffessionalphoto.jpeg';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import TextType from '../components/TextType';
import RotatingText from '../components/RotatingText';
import RevealOnScroll from '../components/RevealOnScroll';

import Marquee from 'react-fast-marquee';

import react from '../assets/react-svgrepo-com.svg';
import javascript from '../assets/javascript-svgrepo-com.svg';
import html from '../../src/assets/html-five-svgrepo-com.svg';
import css from '../assets/css-3-svgrepo-com.svg';
import nextjs from '../../src/assets/next-dot-js-svgrepo-com.svg';
import typescript from '../assets/typescript-svgrepo-com.svg';
import tailwind from '../../src/assets/tailwind-svgrepo-com.svg';


import nodejs from '../../src/assets/node-js-svgrepo-com.svg';
import express from '../../src/assets/express-svgrepo-com.svg';
import mongodb from '../../src/assets/mongodb-svgrepo-com.svg';
import sql from '../../src/assets/sql-svgrepo-com.svg';
import restful from '../../src/assets/rest-api-svgrepo-com.svg';
import postgresql from '../../src/assets/postgresql-svgrepo-com.svg';
import postgis from '../../src/assets/server-database-svgrepo-com.svg';
import qgis from '../../src/assets/qgis-svgrepo-com.svg';
import php from '../../src/assets/php-svgrepo-com.svg';
import supabase from '../assets/supabase-svgrepo-com.svg';
import firebase from '../../src/assets/firebase-svgrepo-com.svg';

import shopify from '../../src/assets/shopify-color-svgrepo-com.svg';
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
  const location = useLocation();
  const [showTitle, setShowTitle] = useState(false);

  const skills = [
    { name: 'React', icon: <img src={react} alt="React" /> },
    { name: 'Node.js', icon: <img src={nodejs} alt="Node.js" /> },
    { name: 'Next.js', icon: <img src={nextjs} alt="Next.js" /> },
    { name: 'TypeScript', icon: <img src={typescript} alt="TypeScript" /> },
    { name: 'JavaScript', icon: <img src={javascript} alt="JavaScript" /> },
    { name: 'Tailwind CSS', icon: <img src={tailwind} alt="Tailwind CSS" /> },
    { name: 'SQL', icon: <img src={sql} alt="SQL" /> },
    { name: 'AWS', icon: <img src={aws} alt="AWS" /> },
    { name: 'RESTful APIs', icon: <img src={restful} alt="RESTful APIs" /> },
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
    { name: 'Firebase', icon: <img src={firebase} alt="Firebase" /> },
    { name: 'Supabase', icon: <img src={supabase} alt="Supabase" /> },
    { name: 'Shopify', icon: <img src={shopify} alt="Shopify" /> }
  ];

  const greetings = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Hallo', 'Salut', 'Howdy', 'Namaste'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 1200);

    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <div className="home-section">
      <div className="home-content">
        <div className="home-layout">
          <div className="logo-container">
            <img src={ajlogo} alt="AJ Logo" className="home-logo" />
          </div>
          <RevealOnScroll className="text-content">
            <div className="home-chip">Building thoughtful digital products</div>
            <h1 className="home-title" style={{ display: showTitle ? 'block' : 'none' }}>
              <div className="greeting-line">
                {showTitle && (
                  <>
                    <RotatingText
                      texts={greetings}
                      rotationInterval={2000}
                      staggerFrom="last"
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-120%' }}
                      staggerDuration={0.025}
                      mainClassName="greeting"
                      splitLevelClassName="greeting-split"
                    />
                    <span>,</span>
                  </>
                )}
              </div>
              {showTitle && (
                <TextType
                  className="name-line"
                  text="I'm Amiel"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="|"
                  loop={false}
                  renderContent={(value) => {
                    const nameIndex = value.indexOf('Amiel');
                    if (nameIndex === -1) {
                      return value;
                    }

                    return (
                      <>
                        {value.slice(0, nameIndex)}
                        <span className="name">{value.slice(nameIndex)}</span>
                      </>
                    );
                  }}
                />
              )}
            </h1>
            <h2 className="home-subtitle">Full Stack Developer</h2>
            <p className="home-description">
              I design and ship clean, resilient experiences end to end while balancing product thinking with strong engineering fundamentals.
            </p>
            <div className="home-actions">
              <a className="primary-action" href="#projects">
                View projects
              </a>
              <a className="ghost-action" href="#experience">
                Work history
              </a>
            </div>
            <RevealOnScroll className="skills-marquee" delay={0.1}>
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
            </RevealOnScroll>
            <RevealOnScroll className="social-links" delay={0.2}>
              <a href="https://github.com/AmielHalili" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/amiel-halili" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:amieljeremiahhalili@gmail.com" className="social-link" rel="noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            </RevealOnScroll>
          </RevealOnScroll>
          <RevealOnScroll className="profile-picture-container" delay={0.1}>
            <img src={proffessionalphoto} alt="Professional headshot" className="home-profile-photo" />
          </RevealOnScroll>
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
