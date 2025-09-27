import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {/* Mirai Arcade */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Software Developer & IT Associate</h3>
              <h4>Mirai Arcade</h4>
              <p className="timeline-date">May 2025 – Present</p>
              <ul className="timeline-description">
                <li>Built and maintained a Shopify storefront with Hydrogen/Oxygen, improving frontend performance and streamlining checkout for 100+ monthly users.</li>
                <li>Supported POS and membership systems; combined software diagnostics with hardware support to increase uptime and reliability.</li>
              </ul>
            </div>
          </div>

          {/* Cooledtured Collections LLC */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Web Developer Intern</h3>
              <h4>Cooledtured Collections LLC</h4>
              <p className="timeline-date">May 2025 – Sep 2025</p>
              <ul className="timeline-description">
                <li>Shipped responsive Shopify pages emphasizing UX, accessibility, and SEO best practices in collaboration with design/marketing.</li>
                <li>Implemented Firebase for real-time product data and created reusable React components to improve client-side functionality.</li>
              </ul>
            </div>
          </div>

          {/* Oasis */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Frontend Developer Intern</h3>
              <h4>Oasis</h4>
              <p className="timeline-date">May 2025 – Present</p>
              <ul className="timeline-description">
                <li>Delivered modular UI components and smooth end-to-end user flows for an AI-driven travel itinerary app.</li>
                <li>Integrated external APIs and collaborated in an Agile startup environment to ship and iterate quickly.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
