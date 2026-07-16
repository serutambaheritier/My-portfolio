import React from 'react';

const Services = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <section className="section-padding services-section">
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-subtitle">What I Do</span>
          <h2 className="section-title">My Services</h2>
        </div>

        <div className="services-grid">
          {/* Service 1: UI/UX Design */}
          <div className="service-card reveal active" onMouseMove={handleMouseMove}>
            <div className="service-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3>UI/UX Design</h3>
            <p>Creating high-fidelity mockups, responsive components, and modern design systems in Figma built specifically around user needs.</p>
          </div>

          {/* Service 2: Web Development */}
          <div className="service-card reveal active reveal-delay-1" onMouseMove={handleMouseMove}>
            <div className="service-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
            </div>
            <h3>Web Development</h3>
            <p>Coding scalable frontend pages using HTML5, CSS3, ES6 JavaScript, and React, fully responsive and optimized for speedy rendering.</p>
          </div>

          {/* Service 3: Backend Development */}
          <div className="service-card reveal active reveal-delay-2" onMouseMove={handleMouseMove}>
            <div className="service-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
              </svg>
            </div>
            <h3>Backend Development</h3>
            <p>Building secure, scalable server-side systems, RESTful APIs, and database architectures using Node.js, Express, and SQL/NoSQL databases.</p>
          </div>

          {/* Service 4: Mobile App Development */}
          <div className="service-card reveal active" onMouseMove={handleMouseMove}>
            <div className="service-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3>Mobile Development</h3>
            <p>Creating cross-platform mobile applications for iOS and Android using modern frameworks like React Native and flutter.</p>
          </div>

          {/* Service 5: SEO & Speed Optimization */}
          <div className="service-card reveal active reveal-delay-1" onMouseMove={handleMouseMove}>
            <div className="service-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3>SEO & Speed Optimization</h3>
            <p>Auditing and optimizing application performance, ensuring fast load times, high lighthouse scores, and top search engine rankings.</p>
          </div>

          {/* Service 6: Support & Update */}
          <div className="service-card reveal active reveal-delay-2" onMouseMove={handleMouseMove}>
            <div className="service-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.84l3.12.518c.55.092.94.56.84 1.11l-.518 3.12c-.092.55-.56.94-1.11.84l-3.12-.518c-.55-.092-.94-.56-.84-1.11l.518-3.12zM4 14h18M4 18h16"/>
              </svg>
            </div>
            <h3>Support & Update</h3>
            <p>Providing website maintenance, debugging, layout refreshes, browser capability updates, and general performance auditing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
