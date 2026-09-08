import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Apply and persist theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  // Scroll Reveal & Active Links Observer
  useEffect(() => {
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });

    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');

    const activeLinkObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href')?.replace('#', '');
            if (href === id || (id === 'home' && href === '')) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-10% 0px -60% 0px'
    });

    sections.forEach(section => {
      if (section.getAttribute('id')) {
        activeLinkObserver.observe(section);
      }
    });

    return () => {
      revealObserver.disconnect();
      activeLinkObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />
      <main>
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onCopyEmail={triggerToast} 
        />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects onOpenModal={(p) => setSelectedProject(p)} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <ScrollToTop />
      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
}

export default App;
