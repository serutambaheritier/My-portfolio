import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Freeze scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal active" id="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-overlay" id="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <button className="modal-close-btn" id="modal-close" aria-label="Close modal" onClick={onClose}>&times;</button>
        <div className="modal-img-wrapper">
          <img id="modal-img" src={project.image.startsWith('http') ? project.image : `/${project.image}`} alt={project.title} />
        </div>
        <div className="modal-body">
          <div className="modal-header">
            <span className="modal-category" id="modal-category">{project.category}</span>
            <h3 className="modal-title" id="modal-title">{project.title}</h3>
          </div>
          <p className="modal-description" id="modal-description">{project.description}</p>
          
          <div className="modal-meta-grid">
            <div className="modal-tags-section">
              <h4>Technologies Used</h4>
              <div className="project-tags" id="modal-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="modal-details-section">
              <h4>Project Details</h4>
              <ul className="modal-details-list">
                <li><strong>Type:</strong> <span id="modal-type-detail">{project.type}</span></li>
                <li><strong>Date:</strong> <span id="modal-date-detail">{project.date}</span></li>
                <li><strong>Role:</strong> <span id="modal-role-detail">{project.role}</span></li>
              </ul>
            </div>
          </div>

          <div className="modal-footer">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="modal-live-link">
              Live Demo
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="modal-github-link">
              GitHub Repo
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
