import React from "react";
import "../styles/Projects.scss";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p className="category">({project.category})</p>
        <p className="description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
