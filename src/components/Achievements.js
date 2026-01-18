import React from 'react';
import './Achievements.css';
import { FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'Microsoft Azure AZ-900',
      issuer: 'Microsoft Azure',
      description: 'Certification in Microsoft Azure Fundamentals',
      icon: <FaCertificate />
    },
    {
      title: 'Python Programming',
      issuer: 'E and ICT Academy, IIT Kanpur',
      description: 'Python Programming certification by E and ICT Academy, IIT Kanpur',
      icon: <FaCertificate />
    },
    {
      title: 'TCS YEP',
      issuer: 'TCS',
      description: 'Certification in TCS Youth Employment Program',
      icon: <FaCertificate />
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Professional certifications and achievements that showcase my expertise
        </p>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-issuer">{achievement.issuer}</p>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

