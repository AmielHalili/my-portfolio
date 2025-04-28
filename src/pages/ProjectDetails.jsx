import React from 'react';
import { useParams } from 'react-router-dom';
import ecosensepage from '../projects/ecosensepage.png';
import dermadetectpage from '../projects/DermadetectPage.png';
import wanderitinerarypage from '../projects/wanderitinerarypage.png';
import '../styles/ProjectDetails.css'; // Import your CSS file for styling

const ProjectDetails = () => {
  const { projectname } = useParams();

  // Project data mapping
  const projectData = {
    'ecosense': {
      title: 'Ecosense (1st Place)',
      overview: 'A full-stack dashboard app with user authentication that utilizes AI and ML to analyze user\'s energy consumption and provide insights/suggestions to reduce energy consumption and save money.',
      features: [
        'User authentication and authorization',
        'Energy consumption analysis',
        'AI-powered recommendations',
        'Real-time analytics dashboard',
        'Financial insights',
        'Energy saving suggestions'
      ],
      technologies: [
        'React',
        'Next.js',
        'MongoDB',
        'Express',
        'JavaScript',
        'Clerk',
        'Pinecone'
      ],
      github: 'https://github.com/Jaehoonoo/EcoSense',
      demo: 'https://www.youtube.com/watch?v=H_4sKeKr6tE',
      devpost: 'https://devpost.com/software/ecosense-tvoi5q',
      image: ecosensepage
    },
    'dermadetect': {
      title: 'DermaDetect',
      overview: 'A web app that uses CNNs and LLMs to detect skin cancer (benign/malignant) and provide a diagnosis, along with any necessary plan of action.',
      features: [
        'Skin cancer detection using CNN',
        'AI-powered diagnosis',
        'Treatment recommendations',
        'User-friendly interface',
        'Secure image processing',
        'Detailed analysis reports'
      ],
      technologies: [
        'React',
        'Python',
        'PyTorch',
        'Flask',
        'TensorFlow',
        'JavaScript',
        'CNN',
        'LLM'
      ],
      github: 'https://github.com/AmielHalili/DermaDetector',
      demo: 'https://www.youtube.com/watch?v=PZ0A-X5kTIU&t=7s',
      devpost: 'https://devpost.com/software/dermadetect',
      image: dermadetectpage
    },
    'wander-travel-itinerary': {
      title: 'Wander - Travel Itinerary',
      overview: 'A website that allows users to create and share travel itineraries, and share their own experiences with others.',
      features: [
        'Travel itinerary creation',
        'Experience sharing',
        'User profiles',
        'Interactive maps',
        'Social features',
        'Travel planning tools'
      ],
      technologies: [
        'React',
        'Express',
        'MongoDB',
        'JavaScript',
        'Node.js'
      ],
      github: 'https://github.com/AmielHalili/Wander',
      demo: 'https://wander-tau.vercel.app/home',
      image: wanderitinerarypage
    },
    'wander-journal': {
      title: 'Wander - Journal',
      overview: 'A website that allows users to write about their travel experiences.',
      features: [
        'Travel journal creation',
        'Experience sharing',
        'User profiles',
        'Media upload',
        'Social features',
        'Travel story organization'
      ],
      technologies: [
        'React',
        'Express',
        'MongoDB',
        'JavaScript',
        'Node.js'
      ],
      github: 'https://github.com/tim56rus/travel-guide',
      image: '/path-to-project-image-3.jpg'
    },
    'whooga': {
      title: 'Whooga (In Progress)',
      overview: 'A website that allows users to write about their travel experiences.',
      features: [
        'Geospatial data visualization',
        'Interactive maps',
        'Location-based features',
        'User-generated content',
        'Advanced search capabilities',
        'Data analysis tools'
      ],
      technologies: [
        'React',
        'Leaflet',
        'Express',
        'MongoDB',
        'JavaScript',
        'Node.js',
        'PostgreSQL',
        'PostGIS',
        'QGIS'
      ],
      image: '/path-to-project-image-3.jpg'
    }
  };

  const project = projectData[projectname];

  if (!project) {
    return (
      <section className="py-16 md:py-20 bg-dark-gray min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-mid-gray rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-soft-white mb-4">Project Not Found</h1>
          <p className="text-light-gray">The requested project could not be found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-dark-gray min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-mid-gray rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="h-64 md:h-96 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <h1 className="text-4xl font-bold text-soft-white mb-4">{project.title}</h1>
            <p className="text-light-gray text-lg mb-6">{project.overview}</p>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-dark-gray text-light-blue rounded-lg hover:bg-bright-blue hover:text-soft-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-dark-gray text-light-blue rounded-lg hover:bg-bright-blue hover:text-soft-white transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-mid-gray rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-soft-white mb-6">Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-light-blue mr-2">•</span>
                <p className="text-light-gray">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-mid-gray rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-soft-white mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark-gray text-light-blue rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
