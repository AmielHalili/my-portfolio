import React from 'react';
import Marquee from 'react-fast-marquee';
import '../styles/Skills.css';

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


const Skills = () => {
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

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
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

        <div className="skills-content">
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-grid">
              <div className="skill-item">
              <img src={react} alt="React" />
              React</div>
              <div className="skill-item">
              <img src={javascript} alt="JavaScript" />
                JavaScript</div>
              <div className="skill-item">
              <img src={html} alt="HTML" />
                HTML5</div>
              <div className="skill-item">
              <img src={css} alt="CSS" />
                CSS3</div>
              <div className="skill-item">
              <img src={nextjs} alt="Next.js" />
                Next.js</div>
              
              <div className="skill-item">
              <img src={typescript} alt="TypeScript" />
                TypeScript</div>
              
              
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend Development</h3>
            <div className="skills-grid">
              <div className="skill-item">
              <img src={nodejs} alt="Node.js" />
                Node.js</div>        
              <div className="skill-item">
              <img src={express} alt="Express" />
                Express</div>
              <div className="skill-item">
              <img src={mongodb} alt="MongoDB" />
                MongoDB</div>
              <div className="skill-item">
              <img src={sql} alt="SQL" />
                SQL</div>
              <div className="skill-item">
              <img src={restful} alt="RESTful APIs" />
                RESTful APIs</div>
              <div className="skill-item">
              <img src={postgresql} alt="PostgreSQL" />
                PostgreSQL</div>
              <div className="skill-item">
              <img src={postgis} alt="PostGIS" />
                PostGIS</div>
              <div className="skill-item">
              <img src={qgis} alt="QGIS" />
                QGIS</div>
              <div className="skill-item">
              <img src={php} alt="PHP" />
                PHP</div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-item">
              <img src={git} alt="Git" />
                Git</div>
              <div className="skill-item">
              <img src={github} alt="GitHub" />
                GitHub</div>
              <div className="skill-item">
              <img src={docker} alt="Docker" />
                Docker</div>
              <div className="skill-item">
              <img src={aws} alt="AWS" />
                AWS</div>
              <div className="skill-item">
              <img src={jira} alt="Jira" />
                Jira</div>
              <div className="skill-item">
              <img src={vercel} alt="Vercel" />
                Vercel</div>
              <div className="skill-item">
              <img src={tensorflow} alt="TensorFlow" />
                TensorFlow</div>
              <div className="skill-item">
              <img src={axios} alt="Axios" />
                Axios</div>
              <div className="skill-item">
              <img src={pytorch} alt="PyTorch" />
                PyTorch</div>
              
              
              
            </div>
          </div>

          <div className="skills-category">
            <h3>Technical Languages</h3>
            <div className="skills-grid">
              <div className="skill-item">
              <img src={python} alt="Python" />
                Python</div>
              <div className="skill-item">
              <img src={c} alt="C" />
                C</div>
              <div className="skill-item">
              <img src={java} alt="Java" />
                Java</div>
              <div className="skill-item">
              <img src={csharp} alt="C#" />
                C#</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 