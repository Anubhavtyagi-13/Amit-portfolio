import React from 'react';
import './Hero.css';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Amit Madan</span>
            </h1>
            <h2 className="hero-subtitle">React Native Developer</h2>
            <p className="hero-description">
              Passionate React Native developer specializing in cross-platform mobile applications. 
              I build scalable, high-performance apps with beautiful UI/UX, integrating RESTful APIs 
              and real-time features. Transforming ideas into exceptional mobile solutions.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="/Amit.Resume.pdf" className="btn btn-secondary" download>
                <FaDownload /> Download Resume
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Amitmadan1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/amit-madan12/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:iamamitmadan@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <img 
                src="/Photo.png" 
                alt="Amit Madan" 
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

