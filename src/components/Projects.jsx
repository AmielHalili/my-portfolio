import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="/path-to-project-image-1.jpg" alt="E-Commerce Platform" />
            </div>
            <div className="project-content">
              <h3>E-Commerce Platform</h3>
              <p className="project-description">
                A full-stack e-commerce platform with user authentication, product management,
                and payment processing. Built with React, Node.js, and MongoDB.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/path-to-project-image-2.jpg" alt="Task Management App" />
            </div>
            <div className="project-content">
              <h3>Task Management App</h3>
              <p className="project-description">
                A collaborative task management application with real-time updates,
                team features, and progress tracking.
              </p>
              <div className="project-tech">
                <span>Next.js</span>
                <span>Firebase</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src="/path-to-project-image-3.jpg" alt="Portfolio Website" />
            </div>
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p className="project-description">
                A responsive portfolio website showcasing skills and projects,
                built with modern web technologies.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>CSS3</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 