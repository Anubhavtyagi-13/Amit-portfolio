import React from 'react';
import './Skills.css';
import { 
  FaReact, 
  FaJs, 
  FaNode, 
  FaGitAlt, 
  FaMobileAlt,
  FaDatabase,
  FaCloud
} from 'react-icons/fa';
import { 
  SiRedux, 
  SiFirebase, 
  SiTypescript,
  SiExpo,
  SiGraphql,
  SiDocker,
  SiJest
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & Mobile',
      skills: [
        { name: 'React Native', icon: <FaMobileAlt />, level: 90 },
        { name: 'React.js', icon: <FaReact />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 88 },
        { name: 'Redux', icon: <SiRedux />, level: 85 },
        { name: 'Expo', icon: <SiExpo />, level: 80 },
        { name: 'Mobile UI/UX', icon: <FaMobileAlt />, level: 88 },
      ]
    },
    {
      title: 'Backend & Integration',
      skills: [
        { name: 'RESTful APIs', icon: <FaNode />, level: 90 },
        { name: 'Socket.io', icon: <FaNode />, level: 85 },
        { name: 'Firebase', icon: <SiFirebase />, level: 80 },
        { name: 'Git', icon: <FaGitAlt />, level: 88 },
        { name: 'API Integration', icon: <FaDatabase />, level: 90 },
      ]
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'State Management', icon: <SiRedux />, level: 85 },
        { name: 'Real-time Features', icon: <FaCloud />, level: 85 },
        { name: 'Cross-platform Development', icon: <FaMobileAlt />, level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build amazing mobile applications
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

