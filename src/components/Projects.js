import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaMobileAlt } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'TalkToGuruJi',
      description: 'Developed and deployed a cross-platform astrology-based mobile app using React Native, enabling users to chat with astrologers in real time. Designed reusable UI components and implemented custom navigation with socket.io integration for real-time messaging.',
      technologies: ['React Native', 'JavaScript', 'RESTful API', 'Socket.io'],
      icons: [<FaMobileAlt />, <SiRedux />],
      github: 'https://github.com/Amitmadan1',
      demo: '#',
      image: 'project1'
    },
    {
      title: 'Dukhansa Shop App',
      description: 'Developed and implemented responsive UI screens for the Dukhansa Shop App using React Native, ensuring alignment with Figma design specifications. Integrated RESTful APIs for seamless data flow and collaborated on features including product listing and cart management.',
      technologies: ['React Native', 'JavaScript', 'Redux', 'RESTful API'],
      icons: [<FaMobileAlt />, <SiRedux />],
      github: 'https://github.com/Amitmadan1',
      demo: '#',
      image: 'project2'
    },
    {
      title: 'Anushaya Urban App',
      description: 'Contributed to the end-to-end development of the Banking Agent App, focusing on improving efficiency for field agents and data accuracy. Collaborated with backend teams to integrate APIs for deposits, RD/FD, and ledger management with responsive UI implementation.',
      technologies: ['React Native', 'JavaScript', 'RESTful API'],
      icons: [<FaMobileAlt />],
      github: 'https://github.com/Amitmadan1',
      demo: '#',
      image: 'project3'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of mobile applications I've built using React Native and modern technologies
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-icon">
                  <FaMobileAlt />
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

