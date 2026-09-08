import React, { useState } from 'react';

const Hero = ({ onOpenResume, onCopyEmail }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const developerSnippet = `const developer = {
  name: 'Heritier Serutamba',
  role: 'Full-Stack Developer & AUCA Student',
  location: 'Kigali, Rwanda 🇷🇼',
  status: 'Open to Work / Freelance',
  skills: ['React 19', 'Node.js', 'Express', 'MySQL/MongoDB']
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(developerSnippet);
    setCopiedCode(true);
    if (onCopyEmail) onCopyEmail('Developer code snippet copied!');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-mesh"></div>
      <div className="floating-circle fc-1"></div>
      <div className="floating-circle fc-2"></div>

      <div className="container hero-grid">
        {/* Hero Text */}
        <div className="hero-content reveal active">
          <div className="hero-badge-pill">
            <span className="badge-pulse"></span>
            <span>Available for Hire & Internships</span>
          </div>

          <span className="hero-tagline">Hi, I am</span>
          <h1 className="hero-title">Heritier <br/><span className="gradient-text">Serutamba</span></h1>
          <p className="hero-description">
            AUCA Undergraduate Software Engineering Student & Full-Stack Developer. I turn complex business requirements into high-performance, elegant full-stack digital products.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <button onClick={onOpenResume} className="btn btn-secondary">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              View Resume / CV
            </button>
          </div>

          {/* Social Links & Copy Email */}
          <div className="hero-socials">
            <span className="hero-socials-label">Connect:</span>
            <div className="social-links-list">
              <a href="https://github.com/serutambaheritier" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub" title="GitHub Profile">
                <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" title="LinkedIn Profile">
                <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('heritier.serutamba@gmail.com');
                  if (onCopyEmail) onCopyEmail('Email copied to clipboard!');
                }} 
                className="social-link email-copy-btn"
                aria-label="Copy Email"
                title="Copy Email Address"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image & Pro Code Snippet */}
        <div className="hero-media reveal active reveal-delay-2">
          <div className="photo-card-wrapper">
            <div className="photo-card">
              <div className="photo-card-inner">
                <img src="/image.jpeg" alt="Heritier Serutamba" />
              </div>
              <div className="photo-card-badge">
                <span className="badge-pulse"></span>
                <span className="badge-text text-primary">Open to work</span>
              </div>
            </div>
          </div>

          {/* Interactive Code Window */}
          <div className="code-window">
            <div className="code-window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="window-title">developer.js</span>
              <button className="copy-snippet-btn" onClick={handleCopyCode} title="Copy Snippet">
                {copiedCode ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <pre className="code-window-body">
              <code>
                <span className="keyword">const</span> <span className="variable">developer</span> = &#123;<br/>
                &nbsp;&nbsp;<span className="property">name</span>: <span className="string">'Heritier Serutamba'</span>,<br/>
                &nbsp;&nbsp;<span className="property">role</span>: <span className="string">'Full-Stack Developer & AUCA Student'</span>,<br/>
                &nbsp;&nbsp;<span className="property">location</span>: <span className="string">'Kigali, Rwanda 🇷🇼'</span>,<br/>
                &nbsp;&nbsp;<span className="property">status</span>: <span className="string">'Open to Work / Freelance'</span>,<br/>
                &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">'React 19'</span>, <span className="string">'Node.js'</span>, <span className="string">'Express'</span>, <span className="string">'MySQL/MongoDB'</span>]<br/>
                &#125;;
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Featured Info Profile Card (IT Heritier) */}
      <div className="container reveal active reveal-delay-3" style={{ marginTop: '2rem' }}>
        <div className="about-banner hero-summary-card">
          <div className="summary-header">
            <h3 className="gradient-text">IT Heritier</h3>
            <span className="summary-tag">Engineering Mindset</span>
          </div>
          <p className="summary-desc">
            I specialize in mapping out complex business requirements and transforming them into beautiful, highly efficient applications that offer great user experiences.
          </p>
          <div className="summary-actions">
            <a href="#about" className="btn btn-secondary btn-sm">Read Full Bio</a>
            <a href="#experience" className="btn btn-primary btn-sm">View Experience</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
