import React from 'react';

const ProjectItem = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h4 className="project-name">{project.name}</h4>
        <div className="project-tag">{project.tag}</div>
      </div>
      <p className="project-desc">{project.description}</p>
    </div>
  );
};

export default ProjectItem;
