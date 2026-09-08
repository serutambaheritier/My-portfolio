import React from 'react';

const About = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-subtitle">Introduction</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-img-container reveal active">
            <div className="about-banner">
              <h3>My Engineering Philosophy</h3>
              <p>
                I believe great software design is not just how something looks, but how intuitively and reliably it works. I focus on modular architectures, responsive design tokens, clean code structures, and smooth micro-interactions.
              </p>
              
              {/* Stat Items Grid */}
              <div className="about-stats-grid">
                <div className="stat-card">
                  <span className="stat-number gradient-text">15+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number gradient-text">12+</span>
                  <span className="stat-label">Tech Tools</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number gradient-text">100%</span>
                  <span className="stat-label">Responsive Design</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number gradient-text">3+</span>
                  <span className="stat-label">Years Learning & Engineering</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-info reveal active reveal-delay-2">
            <span className="about-badge">AUCA Undergraduate & Full-Stack Developer</span>
            <h3>Building scalable full-stack digital solutions tailored to real-world needs.</h3>
            <p>
              As an Undergraduate Software Engineering student at the Adventist University of Central Africa (AUCA), I design and architect web applications end-to-end. I convert business logic and Figma UI designs into responsive frontends backed by robust RESTful APIs.
            </p>
            <p>
              Combining solid software engineering principles with modern full-stack technologies like React, Node.js, Express, MySQL, and MongoDB, I deliver production-ready code built for performance, longevity, and seamless user experiences.
            </p>

            <div className="about-features-list">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div>
                  <h4>High Performance</h4>
                  <p>Optimized bundle sizes, fast load times, and smooth 60fps animations.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <div>
                  <h4>User-Centric Design</h4>
                  <p>Pixel-perfect UI translation from Figma with accessible color contrast.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Let's Collaborate</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
