import React from 'react';
import ExperienceItem from './ExperienceItem';
import ProjectItem from './ProjectItem';

const MainContent = ({ experience, projects }) => {
  return (
    <main className="resume-main">
      {/* Experience Section */}
      {experience && experience.length > 0 && (
        <section className="main-section">
          <h2 className="main-section-title">
            <svg
              className="section-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m0-4V7a2 2 0 012-2h14a2 2 0 012 2v2m-10 4v-4m0 0V5m0 0H9m2 0h2" />
            </svg>
            Professional Experience
          </h2>
          <div>
            {experience.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} />
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <section className="main-section">
          <h2 className="main-section-title">
            <svg
              className="section-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Key Projects
          </h2>
          <div className="projects-grid">
            {projects.map((proj, index) => (
              <ProjectItem key={index} project={proj} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default MainContent;
