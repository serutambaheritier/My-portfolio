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
              <h3>My Philosophy</h3>
              <p>
                I believe great design is not just how something looks, but how it works. I focus on creating responsive layouts, smooth interactions, and clean codebase structures.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Services</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-info reveal active reveal-delay-2">
            <h3>Designing solutions tailored to your needs.</h3>
            <p>
              I work closely with clients and team members to design web interfaces from scratch or based on detailed project suggestions, consulting and iterating through every step of the development cycle to ensure top-notch quality.
            </p>
            <p>
              As a software engineering student, I combine academic principles with modern web development practices to build scalable front-end systems.
            </p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Let's Collaborate</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
