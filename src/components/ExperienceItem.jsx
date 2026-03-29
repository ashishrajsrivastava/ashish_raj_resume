import React from 'react';

const ExperienceItem = ({ experience }) => {
  return (
    <div className="job" id={`job-${experience.id}`}>
      <div className="job-header">
        <h4 className="job-title">{experience.title}</h4>
        <div className="job-company">
          {experience.company}
          {experience.companySub && (
            <span className="company-sub"> | {experience.companySub}</span>
          )}
        </div>
        <div className="job-location-date">
          <span className={`date-badge ${experience.isCurrent ? 'current' : ''}`}>
            {experience.period}
          </span>
          <span className="location">{experience.location}</span>
        </div>
      </div>
      <ul className="job-bullets">
        {experience.bullets.map((bullet, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: bullet }}></li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
