import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="logo" onClick={handleLinkClick}>
          <span class="logo-icon">HS</span>
          <span>Heritier</span>
        </a>

        {/* Desktop & Mobile Menu */}
        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <li><a href="#about" className="nav-link" onClick={handleLinkClick}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#contact" className="btn btn-contact" onClick={handleLinkClick}>Contact Me</a></li>
          </ul>
        </nav>

        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button 
            className="theme-toggle-btn" 
            id="theme-toggle" 
            aria-label="Toggle Theme"
            onClick={toggleTheme}
          >
            <svg className="sun-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg className="moon-icon" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          {/* Mobile Menu Burger */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            id="menu-toggle" 
            aria-label="Toggle Menu"
            onClick={handleToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
