import React, { useState, useEffect } from 'react';

const defaultProjects = [
  {
    id: "delivery-truck-system",
    title: "Delivery Truck System",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1516576885502-d46341ebd360?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive logistics and fleet management platform that tracks delivery routes, manages dispatchers and drivers, schedules shifts, and monitors truck telemetry in real-time. Features an interactive leaflet map interface, automatic route optimization, and driver workload analytics.",
    tags: ["React", "Node.js", "Leaflet.js", "Express", "MongoDB"],
    type: "Full-Stack Web App",
    date: "Feb 2026",
    role: "Full-Stack Developer",
    liveLink: "#",
    githubLink: "https://github.com/serutambaheritier/Delivery-Truck-System.git"
  },
  {
    id: "smrs",
    title: "Smart Medication Reminder System",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive healthcare application designed to manage medication schedules, send automated reminders, and track patient adherence. Built with features for secure patient login, doctor portal synchronization, and real-time dosage logs to ensure healthcare compliance and safety.",
    tags: ["React", "TypeScript", "Node.js", "MySQL", "JWT"],
    type: "Full-Stack Web App",
    date: "May 2026",
    role: "Software Architect & Lead Developer",
    liveLink: "#",
    githubLink: "https://github.com/serutambaheritier/Serutamba-Heritier-27141-SMRS-.git"
  },
  {
    id: "medifix",
    title: "Medifix Portal",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    description: "Medifix is a comprehensive medical portal designed to optimize doctor-patient scheduling and telemedicine workflows. Built from Figma mockups, this responsive front-end application features multi-criteria doctor filtering, real-time schedule slot bookings, secure user login layouts, and a doctor workspace dashboard to manage upcoming appointments and patient files.",
    tags: ["React", "Tailwind CSS", "TypeScript", "Figma", "Vite"],
    type: "Front-End / UI Design",
    date: "Jan 2026",
    role: "Lead Developer & UI Designer",
    liveLink: "#",
    githubLink: "https://github.com/serutambaheritier/Medifix"
  },
  {
    id: "iot-hub",
    title: "Smart Home IoT Hub",
    category: "IoT / Embedded",
    image: "iot.jpg",
    description: "An interactive local dashboard monitoring and controlling smart home devices. Telemetry is collected using DHT11 sensors hooked up to a Raspberry Pi, logging variables like temperature, ambient light, and power usage. Data is pushed using a C++ web socket server and rendered in a React dashboard showcasing real-time gauges, status charts, and smart controls.",
    tags: ["C++", "React", "Raspberry Pi", "WebSocket", "Chart.js"],
    type: "IoT / Full-Stack",
    date: "Mar 2026",
    role: "Hardware Engineer & Developer",
    liveLink: "#",
    githubLink: "https://github.com/serutambaheritier"
  },
  {
    id: "aether-ui",
    title: "Aether Design System",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    description: "Aether is a modern, light and dark mode design language built to speed up SaaS development. It includes complete Figma components (buttons, input grids, dropdowns, navigation grids) using Auto Layout, comprehensive tokens for color themes and typography, as well as several responsive template pages. Highly praised for its clarity and developer hand-off friendliness.",
    tags: ["Figma", "UI/UX Design", "Design Tokens", "Design System"],
    type: "UI/UX Design",
    date: "May 2026",
    role: "UI Designer",
    liveLink: "#",
    githubLink: "https://github.com/serutambaheritier"
  }
];

const Projects = ({ onOpenModal }) => {
  const [projects, setProjects] = useState(defaultProjects);
  const [filteredProjects, setFilteredProjects] = useState(defaultProjects);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setProjects(data);
            setFilteredProjects(data);
          }
        }
      } catch (err) {
        console.warn('Using default projects fallback:', err);
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
