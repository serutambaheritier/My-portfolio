import React, { useState } from 'react';

const experienceData = [
  {
    type: 'experience',
    title: 'Lead Full-Stack Developer & UI Architect',
    organization: 'Medifix Healthcare Portal',
    period: '2025 - Present',
    location: 'Kigali, Rwanda',
    description: 'Spearheaded full-stack web architecture for telemedicine portal. Converted Figma designs into high-performance React components, built scalable REST backend APIs, optimized slot booking user journeys, and introduced responsive UI design tokens.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'TypeScript', 'Vite']
  },
  {
    type: 'experience',
    title: 'Full-Stack Developer & Software Engineer',
    organization: 'Academic & Freelance Projects',
    period: '2024 - Present',
    location: 'Kigali, Rwanda',
    description: 'Designed and built full-stack solutions including Delivery Truck System (logistics dispatch tracker) and Smart Medication Reminder System (SMRS). Integrated Leaflet maps, RESTful APIs, MySQL, MongoDB, and automated Nodemailer notification engines.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Leaflet.js']
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Software Engineering (Undergraduate)',
    organization: 'Adventist University of Central Africa (AUCA)',
    period: '2023 - Present',
    location: 'Kigali, Rwanda',
    description: 'Undergraduate Software Engineering student at AUCA. Focusing on Software Architecture, Full-Stack Web Development, Data Structures & Algorithms, Object-Oriented Programming (C++/Java), Embedded Systems, and Database Systems (MySQL & MongoDB).',
    tech: ['Full-Stack Web', 'Software Design', 'Databases', 'Algorithms', 'C++/Java']
  },
  {
    type: 'experience',
    title: 'Hardware & IoT Systems Engineer',
    organization: 'Smart Home IoT Hub Project',
    period: '2025',
    location: 'Kigali, Rwanda',
    description: 'Engineered custom telemetry pipeline connecting Raspberry Pi DHT11 sensors to a C++ WebSocket server. Rendered real-time gauge dashboards and automated climate alerts.',
    tech: ['C++', 'Raspberry Pi', 'WebSocket', 'React', 'Chart.js']
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredData = activeTab === 'all' 
    ? experienceData 
    : experienceData.filter(item => item.type === activeTab);

  return (
    <section className="section-padding bg-secondary" id="experience" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-subtitle">Career Roadmap</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter reveal active" style={{ marginBottom: '1.5rem' }}>
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Milestones
          </button>
          <button 
            className={`filter-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Work & Projects
          </button>
          <button 
            className={`filter-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education & Academic
          </button>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {filteredData.map((item, index) => (
            <div key={index} className="timeline-item reveal active">
              <div className="timeline-dot-wrapper">
                <div className={`timeline-dot ${item.type === 'education' ? 'education' : ''}`}></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="timeline-type-badge">
                      {item.type === 'education' ? '🎓 Education' : '💼 Work & Leadership'}
                    </span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <h4 className="timeline-org">{item.organization} • <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>{item.location}</span></h4>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-desc">{item.description}</p>
                <div className="timeline-tech-tags">
                  {item.tech.map((t, idx) => (
                    <span key={idx} className="timeline-tech-tag">{t}</span>
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

export default Experience;
