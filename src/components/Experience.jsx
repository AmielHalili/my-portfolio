import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Full Stack Developer Intern</h3>
              <h4>Cooltured Collections LLC.</h4>
              <p className="timeline-date">May 2025 - Present</p>
              <ul className="timeline-description">
                <li>Development of enterprise-level web applications</li>
                <li>Implemented microservices architecture</li>
                <li>Worked with teams to develop complex components</li>
                <li>Optimized application performance</li>
              </ul>
            </div>
          </div>
          {/*

           <div className="timeline-item">
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <h4>Digital Innovations</h4>
              <p className="timeline-date">June 2020 - December 2021</p>
              <ul className="timeline-description">
                <li>Developed responsive web applications</li>
                <li>Integrated third-party APIs</li>
                <li>Implemented CI/CD pipelines</li>
                <li>Conducted code reviews</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Junior Developer</h3>
              <h4>StartUp Tech</h4>
              <p className="timeline-date">January 2019 - May 2020</p>
              <ul className="timeline-description">
                <li>Built frontend components</li>
                <li>Fixed bugs and issues</li>
                <li>Wrote unit tests</li>
                <li>Documented code</li>
              </ul>
            </div>
          </div>
          */}
          
        </div>
      </div>
    </section>
  );
};

export default Experience; 