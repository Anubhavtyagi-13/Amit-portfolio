import React from 'react';
import './Experience.css';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'React Native Developer',
      company: 'Talentrise Technokrate Pvt Ltd',
      location: 'Nagpur, Maharashtra (Remote)',
      period: 'Feb 2025 - Present',
      description: [
        'Developing cross-platform mobile applications using React Native',
        'Implementing UI components and navigation based on design specifications',
        'Integrating APIs and managing application state using Redux Toolkit',
        'Collaborating with the design and backend teams to ensure seamless user experiences',
        'Building responsive and performant mobile applications for iOS and Android'
      ],
      technologies: ['React Native', 'JavaScript', 'Redux Toolkit', 'RESTful APIs']
    },
    {
      title: 'Data Annotator',
      company: 'Droisys India Private Limited',
      location: 'Noida, UP (On-site)',
      period: 'July 2024 - Feb 2025',
      description: [
        'Trained ML models with high-quality annotated data',
        'Assisted in collecting, processing and analyzing large datasets to support decision making process',
        'Ensured data accuracy and quality for machine learning applications',
        'Collaborated with data science teams to improve model performance'
      ],
      technologies: ['Data Annotation', 'Machine Learning', 'Data Analysis']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey in mobile app development
        </p>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="experience-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
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

export default Experience;

