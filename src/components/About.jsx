import React from 'react';
import '../styles/About.css';
import { FaHeart } from 'react-icons/fa';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
  return (
    <section id="about" className="about-section">
      <RevealOnScroll className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <RevealOnScroll className="about-text">
            <p>
              I'm a full stack developer who loves shipping polished experiences end to end. My toolkit spans React, Node.js, and modern databases, and lately I've been diving into AI/ML to level up what I build.
            </p>
            <p>
              Outside of coding, you'll catch me experimenting with new tech, jumping into hackathons, or crafting side projects that stretch my skills.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="about-stats" delay={0.1}>
            <div className="stat-item">
              <h3>2+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Technologies Mastered</p>
            </div>
            <div className="stat-item">
              <h3>
                <span className="icon"><FaHeart /></span>
                Hobbies
              </h3>
              <p>Photography, gaming, cooking, dancing, and relentless foodie hunts.</p>
            </div>
          </RevealOnScroll>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About; 
