import React from 'react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-container resume-modal active" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Resume Modal">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div className="resume-content">
          {/* Header */}
          <div className="resume-header">
            <div>
              <h2 className="resume-name gradient-text">Heritier Serutamba</h2>
              <p className="resume-subtitle">AUCA Undergraduate Student | Full-Stack Developer</p>
            </div>
            <div className="resume-contact-links">
              <span>📧 heritier.serutamba@gmail.com</span>
              <span>📍 Kigali, Rwanda</span>
              <span>🌐 github.com/serutambaheritier</span>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* Executive Summary */}
          <div className="resume-section">
            <h3 className="resume-section-title">Executive Summary</h3>
            <p className="resume-text">
              Motivated Undergraduate Student at AUCA (Adventist University of Central Africa) and passionate Full-Stack Developer with practical experience building modern, responsive, and performance-optimized web applications. Specialized in end-to-end full-stack architectures with React, Node.js, Express, and MySQL/MongoDB, converting Figma designs into seamless user experiences, and delivering robust tech solutions.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="resume-section">
            <h3 className="resume-section-title">Core Competencies</h3>
            <div className="resume-skills-grid">
              <div><strong>Front-End:</strong> React 19, JavaScript (ES6+), TypeScript, HTML5, CSS3, Sass, Tailwind CSS, Bootstrap</div>
              <div><strong>Back-End & DB:</strong> Node.js, Express, RESTful APIs, MySQL, MongoDB, Nodemailer, JWT</div>
              <div><strong>Tools & Concepts:</strong> Git/GitHub, Figma UI/UX, Vite, C++, WebSockets, Responsive Design Tokens</div>
            </div>
          </div>

          {/* Featured Experience */}
          <div className="resume-section">
            <h3 className="resume-section-title">Featured Projects & Technical Achievements</h3>
            
            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Delivery Truck System (Logistics Tracker)</strong>
                <span>Feb 2026</span>
              </div>
              <p>Built a full-stack logistics dashboard for fleet dispatching, telemetry monitoring, interactive Leaflet.js mapping, and route scheduling using React and Node.js.</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Smart Medication Reminder System (SMRS)</strong>
                <span>May 2026</span>
              </div>
              <p>Architected healthcare management tool synchronizing doctor portal data with secure patient dosage logs, automated email reminders, and JWT authentication.</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Medifix Healthcare Portal</strong>
                <span>Jan 2026</span>
              </div>
              <p>Designed and built multi-criteria doctor filtering, slot booking UI, and responsive dashboard screens from custom Figma mockups using React & Tailwind CSS.</p>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="resume-item-header">
              <strong>Bachelor of Science in Software Engineering (Undergraduate)</strong>
              <span>2023 - Present</span>
            </div>
            <p className="resume-org" style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
              Adventist University of Central Africa (AUCA) • Kigali, Rwanda
            </p>
            <p>Undergraduate coursework in Software Architecture, Full-Stack Web Development, Data Structures & Algorithms, Database Systems (MySQL & MongoDB), and Object-Oriented Programming.</p>
          </div>

          {/* Actions */}
          <div className="resume-actions" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <button className="btn btn-secondary" onClick={handlePrint}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
              Print / Save PDF
            </button>
            <button className="btn btn-primary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
