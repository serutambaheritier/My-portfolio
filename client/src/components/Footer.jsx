import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-copyright">
            &copy; <span id="year">{currentYear}</span> Heritier Serutamba. All rights reserved.
          </div>
          <ul className="footer-links">
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#skills" className="footer-link">Skills</a></li>
            <li><a href="#projects" className="footer-link">Projects</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
      </footer>

      {/* Scroll Top Button */}
      <button 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`} 
        id="scroll-top" 
        aria-label="Scroll to top"
        onClick={scrollToTop}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
      </button>
    </>
  );
};

export default Footer;
