import React from "react";
import { useParams } from "react-router-dom";
import ecosensepage from "../projects/ecosensepage.png";
import dermadetectpage from "../projects/DermadetectPage.png";
import wanderitinerarypage from "../projects/wanderitinerarypage.png";
import "../styles/ProjectDetails.css";

import ecosenselogo from "../projects/ecosenselogo.png";
import dermadetectlogo from "../projects/dermadetectlogo.png";
import ajlogo from "../assets/ajlogo.png";
import wanderlogo from "../projects/wanderlogo.svg";
import wanderlogo2 from "../projects/WanderLogoItinerary.png";
import hyvelogo from "../projects/hyvelogo.png"; 


import react from '../assets/react-svgrepo-com.svg';
import javascript from '../assets/javascript-svgrepo-com.svg';
import html from '../assets/html-five-svgrepo-com.svg';
import css from '../assets/css-3-svgrepo-com.svg';
import nextjs from '../assets/next-dot-js-svgrepo-com.svg';
import typescript from '../assets/typescript-svgrepo-com.svg';
import tailwind from '../../src/assets/tailwind-svgrepo-com.svg';
import supabase from '../assets/supabase-svgrepo-com.svg';
import firebase from '../../src/assets/firebase-svgrepo-com.svg';

import shopify from '../../src/assets/shopify-color-svgrepo-com.svg';
import nodejs from '../assets/node-js-svgrepo-com.svg';
import express from '../assets/express-svgrepo-com.svg';
import mongodb from '../assets/mongodb-svgrepo-com.svg';
import sql from '../assets/sql-svgrepo-com.svg';
import restful from '../assets/rest-api-svgrepo-com.svg';
import postgresql from '../assets/postgresql-svgrepo-com.svg';
import postgis from '../assets/server-database-svgrepo-com.svg';
import qgis from '../assets/qgis-svgrepo-com.svg';
import php from '../assets/php-svgrepo-com.svg';

import python from '../assets/python-svgrepo-com.svg';
import c from '../assets/c-program-icon.svg';
import java from '../assets/java-svgrepo-com.svg';
import csharp from '../assets/c-sharp-16-svgrepo-com.svg';

import tensorflow from '../assets/tensorflow-svgrepo-com.svg';
import pytorch from '../assets/pytorch-svgrepo-com.svg';
import axios from '../assets/httpshortcuts-svgrepo-com.svg';
import vercelIcon from '../assets/vercel-logo-svgrepo-com.svg';

const ProjectDetails = () => {
  const { projectname } = useParams();

  const techIcons = {
    "React": react,
    "Next.js": nextjs,
    "MongoDB": mongodb,
    "Express": express,
    "JavaScript": javascript,
    "TypeScript": typescript,
    "SQL": sql,
    "PostgreSQL": postgresql,
    "PostGIS": postgis,
    "QGIS": qgis,
    "PHP": php,
    "Python": python,
    "C": c,
    "Java": java,
    "C#": csharp,
    "TensorFlow": tensorflow,
    "PyTorch": pytorch,
    "Axios": axios,
    "RESTful APIs": restful,
    "Node.js": nodejs,
    "Supabase": supabase,
    "Vercel": vercelIcon, 
    "Tailwind": tailwind,
    "Firebase": firebase,
    "Shopify": shopify,
    
  };

  // Project data mapping
  const projectData = {
    ecosense: {
      title: "Ecosense - 1st Place UCF Knight Hacks Hackathon",
      overview:
        "A full-stack dashboard app with user authentication that utilizes AI and ML to analyze user's energy consumption and provide insights/suggestions to reduce energy consumption and save money.",
      features: [
        "User authentication and authorization",
        "Energy consumption analysis",
        "AI-powered recommendations",
        "Real-time analytics dashboard",
        "Financial insights",
        "Energy saving suggestions",
      ],
      technologies: [
        "React",
        "Next.js",
        "MongoDB",
        "Express",
        "JavaScript",
        "Clerk",
        "Pinecone",
      ],
      github: "https://github.com/Jaehoonoo/EcoSense",
      demo: "https://www.youtube.com/watch?v=H_4sKeKr6tE",
      devpost: "https://devpost.com/software/ecosense-tvoi5q",
      image: ecosenselogo,
    },
    dermadetect: {
      title: "DermaDetect",
      overview:
        "A web app that uses CNNs and LLMs to detect skin cancer (benign/malignant) and provide a diagnosis, along with any necessary plan of action.",
      features: [
        "Skin cancer detection using CNN",
        "AI-powered diagnosis",
        "Treatment recommendations",
        "User-friendly interface",
        "Secure image processing",
        "Detailed analysis reports",
      ],
      technologies: [
        "React",
        "Python",
        "PyTorch",
        "Flask",
        "TensorFlow",
        "JavaScript",
        "CNN",
        "LLM",
      ],
      github: "https://github.com/AmielHalili/DermaDetector",
      demo: "https://www.youtube.com/watch?v=PZ0A-X5kTIU&t=7s",
      devpost: "https://devpost.com/software/dermadetect",
      image: dermadetectlogo,
    },
    "wander-travel-itinerary": {
      title: "Wander - Travel Itinerary",
      overview:
        "A website that allows users to create and share travel itineraries, and share their own experiences with others.",
      features: [
        "Travel itinerary creation",
        "Experience sharing",
        "User profiles",
        "Interactive maps",
        "Social features",
        "Travel planning tools",
      ],
      technologies: ["React", "Express", "MongoDB", "JavaScript", "Node.js"],
      github: "https://github.com/AmielHalili/Wander",
      demo: "https://wander-tau.vercel.app/home",
      image: wanderlogo2,
    },
    "wander-journal": {
      title: "Wander - Journal",
      overview:
        "A website that allows users to write about their travel experiences.",
      features: [
        "Travel journal creation",
        "Experience sharing",
        "User profiles",
        "Media upload",
        "Social features",
        "Travel story organization",
      ],
      technologies: ["React", "Express", "MongoDB", "JavaScript", "Node.js"],
      github: "https://github.com/tim56rus/travel-guide",
      demo: "https://www.youtube.com/watch?v=7S6OhmtESoc",
      image: wanderlogo,
    },
    whooga: {
      title: "Whooga (In Progress)",
      overview:
        "A website that allows users to write about their travel experiences.",
      features: [
        "Geospatial data visualization",
        "Interactive maps",
        "Location-based features",
        "User-generated content",
        "Advanced search capabilities",
        "Data analysis tools",
      ],
      technologies: [
        "React",
        "Leaflet",
        "Express",
        "MongoDB",
        "JavaScript",
        "Node.js",
        "PostgreSQL",
        "PostGIS",
        "QGIS",
      ],
      image: ajlogo,
    },

    // 🔥 HYVE
    hyve: {
      title: "Hyve",
      overview:
        "A community platform to create and find local professional meetups—and match with peers by interest, role, and skill.",
      features: [
        "Create and host events",
        "Discover local meetups by interest, role, and skills",
        "User profiles & RSVP management",
        "Search and filtering",
        "Responsive UI",
      ],
      technologies: ["React", "Node.js", "JavaScript", "Supabase", "Tailwind", "Vercel"],
      github: "https://github.com/AmielHalili/Hyve",
      demo: "https://youtu.be/HFobu8bqfzw",
      website: "https://hyve-delta.vercel.app/",
      image: hyvelogo,
    },
  };

  const project = projectData[projectname];

  if (!project) {
    return (
      <section className="py-16 md:py-20 bg-dark-gray min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-mid-gray rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-soft-white mb-4">
            Project Not Found
          </h1>
          <p className="text-light-gray">
            The requested project could not be found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-dark-gray min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="overview-container bg-mid-gray rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="project-logo h-64 md:h-96 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <h1 className="text-4xl font-bold text-soft-white mb-4">
              {project.title}
            </h1>
            <p className="text-light-gray text-lg mb-6">{project.overview}</p>
            <div className="project-links flex gap-4 flex-wrap justify-center mt-4">
              {/* NEW: Live Site support */}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  Live Site
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  GitHub
                </a>
              )}
              {project.devpost && (
                <a
                  href={project.devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  Devpost
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-mid-gray rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="features-title text-2xl font-bold text-soft-white mb-6">
            Features
          </h2>
          <div className="features-grid grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="features-bullets text-light-blue mr-2">•</span>
                <p className="text-light-gray">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-mid-gray rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="tech-title text-2xl font-bold text-soft-white mb-6">
            Technologies Used
          </h2>
          <div className="tech-grid">
            {project.technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                {techIcons[tech] && (
                  <img src={techIcons[tech]} alt={tech} className="tech-icon" />
                )}
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
