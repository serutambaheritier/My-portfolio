// Projects Database
const projectsData = {
    'medifix': {
        title: 'Medifix Portal',
        category: 'Web Application',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
        description: 'Medifix is a comprehensive medical portal designed to optimize doctor-patient scheduling and telemedicine workflows. Built from Figma mockups, this responsive front-end application features multi-criteria doctor filtering, real-time schedule slot bookings, secure user login layouts, and a doctor workspace dashboard to manage upcoming appointments and patient files.',
        tags: ['React', 'Tailwind CSS', 'TypeScript', 'Figma', 'Vite'],
        type: 'Front-End / UI Design',
        date: 'Jan 2026',
        role: 'Lead Developer & UI Designer',
        liveLink: '#',
        githubLink: 'https://github.com/serutambaheritier/Medifix'
    },
    'iot-hub': {
        title: 'Smart Home IoT Hub',
        category: 'IoT / Embedded',
        image: 'iot.jpg',
        description: 'An interactive local dashboard monitoring and controlling smart home devices. Telemetry is collected using DHT11 sensors hooked up to a Raspberry Pi, logging variables like temperature, ambient light, and power usage. Data is pushed using a C++ web socket server and rendered in a React dashboard showcasing real-time gauges, status charts, and smart controls.',
        tags: ['C++', 'React', 'Raspberry Pi', 'WebSocket', 'Chart.js'],
        type: 'IoT / Full-Stack',
        date: 'Mar 2026',
        role: 'Hardware Engineer & Developer',
        liveLink: '#',
        githubLink: 'https://github.com/serutambaheritier'
    },
    'aether-ui': {
        title: 'Aether Design System',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
        description: 'Aether is a modern, light and dark mode design language built to speed up SaaS development. It includes complete Figma components (buttons, input grids, dropdowns, navigation grids) using Auto Layout, comprehensive tokens for color themes and typography, as well as several responsive template pages. Highly praised for its clarity and developer hand-off friendliness.',
        tags: ['Figma', 'UI/UX Design', 'Design Tokens', 'Design System'],
        type: 'UI/UX Design',
        date: 'May 2026',
        role: 'UI Designer',
        liveLink: '#',
        githubLink: 'https://github.com/serutambaheritier'
    }
};

// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const menuToggle = document.getElementById('menu-toggle');
const themeToggle = document.getElementById('theme-toggle');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');
const yearSpan = document.getElementById('year');

// Project Modal Elements
const projectModal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTags = document.getElementById('modal-tags');
const modalTypeDetail = document.getElementById('modal-type-detail');
const modalDateDetail = document.getElementById('modal-date-detail');
const modalRoleDetail = document.getElementById('modal-role-detail');
const modalLiveLink = document.getElementById('modal-live-link');
const modalGithubLink = document.getElementById('modal-github-link');

// Set current copyright year
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 1. Theme Management (Persist Dark/Light Theme)
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Smooth transition rotation on svg
    const activeSvg = themeToggle.querySelector(newTheme === 'dark' ? '.sun-icon' : '.moon-icon');
    if (activeSvg) {
        activeSvg.style.transform = 'scale(0.8) rotate(-90deg)';
        setTimeout(() => {
            activeSvg.style.transform = 'none';
        }, 100);
    }
});

// 2. Mobile Menu Navigation
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 3. Navbar Scrolled Effect & Scroll Top Visibility
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    
    // Add scrolled class to navbar
    if (scrollPos > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll top button
    if (scrollPos > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Scroll to top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 4. Scroll Reveal (Intersection Observer)
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once revealed to maintain clean scroll performance
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

// 5. Active Nav Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const activeLinkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                const href = link.getAttribute('href').replace('#', '');
                if (href === id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '-10% 0px -70% 0px'
});

sections.forEach(section => {
    activeLinkObserver.observe(section);
});

// 6. Projects Filtering Grid
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Active button toggle
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            // Hide cards with zoom-out scaling, then display: none
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'flex';
                // Trigger reflow for transition to animate properly
                void card.offsetWidth;
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                // Delay hiding elements so transition is visible
                setTimeout(() => {
                    if (card.style.opacity === '0') {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
    });
});

// 7. Interactive Details Modal
const openModalButtons = document.querySelectorAll('.open-modal-btn');

const openModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data) return;

    // Load data into modal elements
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalCategory.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    
    // Generate tech tags
    modalTags.innerHTML = '';
    data.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('project-tag');
        tagSpan.textContent = tag;
        modalTags.appendChild(tagSpan);
    });

    // Load meta details
    modalTypeDetail.textContent = data.type;
    modalDateDetail.textContent = data.date;
    modalRoleDetail.textContent = data.role;
    
    // Set links
    modalLiveLink.href = data.liveLink;
    modalGithubLink.href = data.githubLink;

    // Show modal & freeze body scrolling
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
};

// Open modal when clicking anywhere on the card
projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // If they click on specific anchor links (if added in the future), prevent double trigger
        if (e.target.closest('a')) return;
        
        const btn = card.querySelector('.open-modal-btn');
        if (btn) {
            const projectId = btn.getAttribute('data-project');
            openModal(projectId);
        }
    });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeModal();
    }
});

// 8. Contact Form Handling & Validation
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        let isValid = true;
        formFeedback.className = 'form-message';
        formFeedback.textContent = '';
        
        // Basic validation
        if (!nameInput.value.trim()) {
            isValid = false;
            nameInput.style.borderColor = '#ef4444';
        } else {
            nameInput.style.borderColor = '';
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.style.borderColor = '#ef4444';
        } else {
            emailInput.style.borderColor = '';
        }
        
        // Message validation
        if (!messageInput.value.trim()) {
            isValid = false;
            messageInput.style.borderColor = '#ef4444';
        } else {
            messageInput.style.borderColor = '';
        }
        
        if (!isValid) {
            formFeedback.classList.add('error');
            formFeedback.textContent = 'Please fill out all fields correctly.';
            return;
        }

        // Mock success submission
        formFeedback.classList.add('success');
        formFeedback.textContent = 'Thank you, Heritier! Your message has been sent successfully.';
        
        // Reset form
        contactForm.reset();
    });
}

// 9. Card Mouse Move Light Effect (Services Hover)
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});
