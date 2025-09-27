import React from 'react';
import '../styles/Experience.css';
import RevealOnScroll from './RevealOnScroll';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaStar } from 'react-icons/fa';

const timelineItems = [
  {
    id: 'mirai-arcade',
    type: 'work',
    title: 'Software Developer & IT Associate',
    subtitle: 'Mirai Arcade',
    date: 'May 2025 – Present',
    bullets: [
      'Built and maintained a Shopify storefront with Hydrogen/Oxygen, improving frontend performance and streamlining checkout for 100+ monthly users.',
      'Supported POS and membership systems; combined software diagnostics with hardware support to increase uptime and reliability.'
    ]
  },
  {
    id: 'cooledtured',
    type: 'work',
    title: 'Web Developer Intern',
    subtitle: 'Cooledtured Collections LLC',
    date: 'May 2025 – Sep 2025',
    bullets: [
      'Shipped responsive Shopify pages emphasizing UX, accessibility, and SEO best practices in collaboration with design/marketing.',
      'Implemented Firebase for real-time product data and created reusable React components to improve client-side functionality.'
    ]
  },
  {
    id: 'oasis',
    type: 'work',
    title: 'Frontend Developer Intern',
    subtitle: 'Oasis',
    date: 'May 2025 – Present',
    bullets: [
      'Delivered modular UI components and smooth end-to-end user flows for an AI-driven travel itinerary app.',
      'Integrated external APIs and collaborated in an Agile startup environment to ship and iterate quickly.'
    ]
  }
];

const elementStyles = {
  work: {
    contentStyle: {
      background: 'rgba(15, 23, 42, 0.95)',
      color: '#f8fafc',
      border: '1px solid rgba(96, 165, 250, 0.25)',
      boxShadow: '0 12px 30px rgba(15, 23, 42, 0.45)'
    },
    contentArrowStyle: { borderRight: '7px solid rgba(15, 23, 42, 0.95)' },
    iconStyle: { background: 'var(--light-blue)', color: '#fff' },
    icon: <FaBriefcase />
  }
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <RevealOnScroll className="container">
        <h2 className="section-title">Experience</h2>
        <VerticalTimeline lineColor="var(--light-blue)">
          {timelineItems.map((item) => {
            const style = elementStyles[item.type];

            return (
              <VerticalTimelineElement
                key={item.id}
                className={`vertical-timeline-element--${item.type}`}
                date={item.date}
                contentStyle={style.contentStyle}
                contentArrowStyle={style.contentArrowStyle}
                iconStyle={style.iconStyle}
                icon={style.icon}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                <ul className="timeline-description">
                  {item.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </RevealOnScroll>
    </section>
  );
};

export default Experience;
