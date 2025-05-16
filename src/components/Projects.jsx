import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';
import ecosensepage from '../projects/ecosensepage.png';
import dermadetectpage from '../projects/DermadetectPage.png';
import wanderitinerarypage from '../projects/wanderitinerarypage.png';
import wanderjournalpage from '../projects/WanderJournalPage.png';





const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectName) => {
    navigate(`/projects/${encodeURIComponent(projectName.replace(/\s+/g, '-').toLowerCase())}`);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          
          <div 
            className="project-card"
            onClick={() => handleProjectClick('Ecosense')}
          >
            <div className="window-controls">
              <div className="control-circle red"></div>
              <div className="control-circle yellow"></div>
              <div className="control-circle green"></div>
            </div>
            <div className="project-image">
              <img src={ecosensepage} alt="dashboard app" />
            </div>
            <div className="project-content">
              <h3>Ecosense (1st Place)</h3>
              <p className="project-description">
                A full-stack dashboard app with user authentication that utilizes AI and ML to analyze user's energy consumption and provide insights/suggestions to reduce energy consumption and save money.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Next.js</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>JavaScript</span>
                <span>Clerk</span>
                <span>Pinecone</span>
              </div>
              <div className="project-links">
                <a href="https://www.youtube.com/watch?v=H_4sKeKr6tE" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a>
                <a href="https://github.com/Jaehoonoo/EcoSense" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>GitHub</a>
                <a href="https://devpost.com/software/ecosense-tvoi5q" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Devpost</a>
              </div>
            </div>
          </div>

          <div 
            className="project-card"
            onClick={() => handleProjectClick('DermaDetect')}
          >
            <div className="window-controls">
              <div className="control-circle red"></div>
              <div className="control-circle yellow"></div>
              <div className="control-circle green"></div>
            </div>
            <div className="project-image">
              <img src={dermadetectpage} alt="DermaDetect" />
            </div>
            <div className="project-content">
              <h3>DermaDetect</h3>
              <p className="project-description">
                A web app that uses CNNs and LLMs to detect skin cancer (benign/malignant) and provide a diagnosis, along with any necessary plan of action.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Python</span>
                <span>PyTorch</span>
                <span>Flask</span>
                <span>TensorFlow</span>
                <span>JavaScript</span>
                <span>CNN</span>
                <span>LLM</span>
              </div>
              <div className="project-links">
                <a href="https://www.youtube.com/watch?v=PZ0A-X5kTIU&t=7s" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a>
                <a href="https://github.com/AmielHalili/DermaDetector" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>GitHub</a>
                <a href="https://devpost.com/software/dermadetect" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Devpost</a>
              </div>
            </div>
          </div>

          <div 
            className="project-card"
            onClick={() => handleProjectClick('Wander Travel Itinerary')}
          >
            <div className="window-controls">
              <div className="control-circle red"></div>
              <div className="control-circle yellow"></div>
              <div className="control-circle green"></div>
            </div>
            <div className="project-image">
              <img src={wanderitinerarypage} alt="Wander Travel Itinerary" />
            </div>
            <div className="project-content">
              <h3>Wander - Travel Itinerary</h3>
              <p className="project-description">
                A website that allows users to create and share travel itineraries, and share their own experiences with others.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                
              </div>
              <div className="project-links">
                <a href="https://wander-tau.vercel.app/home" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Live Site</a>
                <a href="https://github.com/AmielHalili/Wander" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>GitHub</a>
              </div>
            </div>
          </div>

          <div 
            className="project-card"
            onClick={() => handleProjectClick('Wander Journal')}
          >
            <div className="window-controls">
              <div className="control-circle red"></div>
              <div className="control-circle yellow"></div>
              <div className="control-circle green"></div>
            </div>
            <div className="project-image">
              <img src={wanderjournalpage} alt="Wander Journal" />
            </div>
            <div className="project-content">
              <h3>Wander - Journal</h3>
              <p className="project-description">
                A website that allows users to write about their travel experiences.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>JavaScript</span>
                <span>Node.js</span>
              </div>
              <div className="project-links">
                {/* <a href="#" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a> */}
                <a href="https://github.com/tim56rus/travel-guide" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>GitHub</a>
                <a href="https://www.youtube.com/watch?v=7S6OhmtESoc" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a>

              </div>
            </div>
          </div>

          <div 
            className="project-card"
            onClick={() => handleProjectClick('Whooga')}
          >
            <div className="window-controls">
              <div className="control-circle red"></div>
              <div className="control-circle yellow"></div>
              <div className="control-circle green"></div>
            </div>
            <div className="project-image">
              <img src="/path-to-project-image-3.jpg" alt="Whooga" />
            </div>
            <div className="project-content">
              <h3>Whooga (In Progress)</h3>
              <p className="project-description">
                A website that allows users to write about their travel experiences.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Leaflet</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>PostGIS</span>
                <span>QGIS</span>
              </div>
              <div className="project-links">
                {/* <a href="#" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a> */}
                {/* <a href="https://github.com/tim56rus/travel-guide" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>GitHub</a> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 