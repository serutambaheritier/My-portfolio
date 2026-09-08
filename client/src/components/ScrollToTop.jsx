import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button 
      className="scroll-to-top-btn" 
      onClick={scrollToTop} 
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <svg className="progress-ring" width="44" height="44">
        <circle
          className="progress-ring-circle"
          stroke="var(--accent-primary)"
          strokeWidth="3"
          fill="transparent"
          r="18"
          cx="22"
          cy="22"
          style={{
            strokeDasharray: `${2 * Math.PI * 18}`,
            strokeDashoffset: `${2 * Math.PI * 18 * (1 - scrollProgress / 100)}`
          }}
        />
      </svg>
      <svg className="arrow-icon" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;
