import React from 'react';

const Sidebar = ({ certs, skills, softSkills, education, community }) => {
  return (
    <aside className="resume-sidebar">
      {/* Certifications */}
      {certs && certs.length > 0 && (
        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Certifications</h3>
          <div className="cert-list">
            {certs.map((cert, index) => (
              <div className="cert-item" key={index}>
                <div className={`cert-badge ${cert.type}`}>{cert.badge}</div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Technical Skills</h3>
          {skills.map((group, index) => (
            <div className="skill-group" key={index}>
              <div className="skill-group-title">{group.group}</div>
              <div className="skill-tags">
                {group.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Soft Skills */}
      {softSkills && softSkills.length > 0 && (
        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Capabilities</h3>
          <ul className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Education</h3>
          {education.map((edu, index) => (
            <div className="edu-item" key={index}>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      {/* Community */}
      {community && community.length > 0 && (
        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Community</h3>
          <ul className="community-list">
            {community.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
