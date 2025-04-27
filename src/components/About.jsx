import React from 'react';
import '../styles/About.css';
import { FaHeart } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. I have taken a recent interest in learning more about AI and Machine Learning too.
              My journey in software development began during my late highschool years, and I've been constantly learning and
              improving my skills ever since.
            </p>
            <p>
              I specialize in creating responsive, user-friendly web applications using modern technologies like React,
              Node.js, and various databases. I'm particularly interested in building unique and scalable applications that solve
              real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to hackathons,
              or working on personal projects that challenge my skills.
            </p>
          </div>
          <div className="about-stats">
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
              <p>Photography📸, Gaming🎮, Cooking🍳, Dancing🕺, Proffesional Eater🍴</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 