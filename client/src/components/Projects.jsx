import React, { useState, useEffect } from 'react';

const Projects = ({ onOpenModal }) => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) {
          throw new Error('Failed to fetch projects data');
        }
        const data = await res.json();
        setProjects(data);
        setFilteredProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || p.id.includes(filter)));
    }
  };

  if (loading) {
    return (
      <section className="section-padding bg-secondary" id="projects">
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 className="section-title">Loading Projects...</h3>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding bg-secondary" id="projects">
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 className="section-title">Error Loading Projects</h3>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-secondary" id="projects" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-subtitle">My Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Category Filters */}
        <div className="projects-filter reveal active">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('web')}
          >
            Web Apps
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ui' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('ui')}
          >
            UI/UX Design
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'iot' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('iot')}
          >
            IoT
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card reveal active" 
              data-category={project.category.toLowerCase().includes('web') ? 'web' : project.category.toLowerCase().includes('design') ? 'ui' : 'iot'}
              onClick={() => onOpenModal(project)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-img-wrapper">
                <img src={project.image.startsWith('http') ? project.image : `/${project.image}`} alt={project.title} />
                <div className="project-overlay">
                  <button className="project-overlay-btn open-modal-btn" aria-label="View Project Details">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
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

export default Projects;
