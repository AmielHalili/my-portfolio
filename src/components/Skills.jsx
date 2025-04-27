import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-grid">
              <div className="skill-item">React</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">HTML5</div>
              <div className="skill-item">CSS3</div>
              <div className="skill-item">Next.js</div>
              <div className="skill-item">Redux</div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend Development</h3>
            <div className="skills-grid">
              <div className="skill-item">Node.js</div>
              <div className="skill-item">Express</div>
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">SQL</div>
              <div className="skill-item">RESTful APIs</div>
              <div className="skill-item">GraphQL</div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-item">Git</div>
              <div className="skill-item">Docker</div>
              <div className="skill-item">AWS</div>
              <div className="skill-item">Jest</div>
              <div className="skill-item">Webpack</div>
              <div className="skill-item">CI/CD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 