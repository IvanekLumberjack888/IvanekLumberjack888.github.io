// Professional Portfolio App - Ivo Doležal
// Data Engineer & System Innovator

// Projects data
const projects = [
    {
        title: "Text Analyzer",
        description: "Pokročilý nástroj pro analýzu textových dat s využitím Python knihoven",
        tech: ["Python", "Pandas", "NLP"],
        github: "https://github.com/IvanekLumberjack888/text_analyzer",
        demo: "https://ivaneklumberjack888.github.io/text_analyzer/",
        icon: "code"
    },
    {
        title: "Bulls & Cows",
        description: "Interaktivní hra implementovaná v Pythonu s logickým algoritmem",
        tech: ["Python", "Algoritmy", "Game Logic"],
        github: "https://github.com/IvanekLumberjack888/Bulls-and-Cows",
        demo: "https://ivaneklumberjack888.github.io/Bulls-and-Cows/",
        icon: "gamepad-2"
    },
    {
        title: "Election Scraper",
        description: "Web scraping nástroj pro sběr a analýzu volebních dat",
        tech: ["Python", "Web Scraping", "Data Analysis"],
        github: "https://github.com/IvanekLumberjack888/Elections-Scraper",
        demo: "https://ivaneklumberjack888.github.io/Elections-Scraper/",
        icon: "globe"
    },
    {
        title: "Analýza HDP vs mzdy",
        description: "Komplexní SQL analýza ekonomických dat za období 2006-2018",
        tech: ["SQL", "PostgreSQL", "Data Analysis"],
        github: "https://github.com/IvanekLumberjack888/sql-projekt-engeto",
        demo: "https://ivaneklumberjack888.github.io/sql-projekt-engeto/",
        icon: "database"
    },
    {
        title: "PowerBI pro Engeto",
        description: "Interaktivní dashboard a vizualizace dat v Power BI",
        tech: ["Power BI", "DAX", "Data Visualization"],
        github: "https://github.com/IvanekLumberjack888/PowerBI-for-Engeto",
        demo: "https://ivaneklumberjack888.github.io/PowerBI-for-Engeto/",
        icon: "bar-chart-3"
    }
];

// Skills data with levels
const skills = [
    { 
        category: "Programování", 
        items: [
            { name: "Python", level: 90 },
            { name: "SQL", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "Web Scraping", level: 75 }
        ],
        icon: "code" 
    },
    { 
        category: "Vizualizace", 
        items: [
            { name: "Power BI", level: 85 },
            { name: "DAX", level: 80 },
            { name: "Dashboards", level: 90 },
            { name: "Reporting", level: 85 }
        ],
        icon: "bar-chart-3" 
    },
    { 
        category: "Systémy", 
        items: [
            { name: "SharePoint", level: 75 },
            { name: "Power Automate", level: 70 },
            { name: "M365", level: 80 },
            { name: "Digitalizace", level: 85 }
        ],
        icon: "settings" 
    }
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize Lucide icons first
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Populate content
    populateProjects();
    populateSkills();
    
    // Setup interactions
    setupSmoothScrolling();
    setupMobileNavigation();
    setupScrollAnimations();
    setupSkillAnimations();
    
    // Re-initialize icons after content population
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);
}

// Populate projects section
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card animate-on-scroll">
            <div class="project-header">
                <div class="project-icon">
                    <i data-lucide="${project.icon}"></i>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                </div>
            </div>
            <div class="project-content">
                <div class="tech-stack">
                    ${project.tech.map(tech => `
                        <span class="tech-badge">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
                       class="btn btn--outline btn--sm">
                        <i data-lucide="github"></i>
                        GitHub
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" 
                       class="btn btn--primary btn--sm">
                        <i data-lucide="external-link"></i>
                        Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Populate skills section
function populateSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = skills.map((skillGroup, index) => `
        <div class="skill-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
            <div class="skill-icon">
                <i data-lucide="${skillGroup.icon}"></i>
            </div>
            <h3 class="skill-category">${skillGroup.category}</h3>
            <div class="skill-items">
                ${skillGroup.items.map((skill, skillIndex) => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-level">
                            <div class="skill-progress" 
                                 data-level="${skill.level}"
                                 style="animation-delay: ${(index * 0.1) + (skillIndex * 0.05)}s">
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup mobile navigation
function setupMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-open');
            
            // Update icon
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('mobile-open')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            
            // Re-initialize icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
        
        // Close mobile menu when clicking on links
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                const icon = navToggle.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });
        });
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate skill progress bars if this is a skills section
                if (entry.target.classList.contains('skill-card')) {
                    animateSkillBars(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Setup skill level animations
function setupSkillAnimations() {
    // Add CSS for progress bar animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .skill-progress {
            width: 0%;
            transition: width 1.5s ease-out;
        }
        
        .skill-progress.animate-bar {
            width: var(--target-width);
        }
        
        /* Mobile navigation styles */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                padding: var(--space-lg);
                box-shadow: var(--shadow-lg);
                border-top: 1px solid var(--color-border);
            }
            
            .nav-links.mobile-open {
                display: flex;
            }
            
            .nav-links .nav-link {
                padding: var(--space-md) 0;
                text-align: center;
                border-bottom: 1px solid var(--color-border);
                margin-bottom: var(--space-sm);
            }
            
            .nav-links .nav-link:last-child {
                border-bottom: none;
                margin-bottom: 0;
            }
        }
        
        /* Additional hover effects */
        .project-card:hover .project-icon {
            transform: scale(1.1);
            transition: transform var(--transition-fast);
        }
        
        .contact-card-body:hover .contact-icon {
            transform: scale(1.1);
            transition: transform var(--transition-fast);
        }
        
        /* Smooth navbar transition */
        .navbar.scrolled {
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: var(--shadow-sm);
        }
    `;
    document.head.appendChild(style);
}

// Animate skill progress bars
function animateSkillBars(skillCard) {
    const progressBars = skillCard.querySelectorAll('.skill-progress');
    
    progressBars.forEach((bar, index) => {
        const level = bar.getAttribute('data-level');
        
        setTimeout(() => {
            bar.style.setProperty('--target-width', `${level}%`);
            bar.classList.add('animate-bar');
        }, index * 100);
    });
}

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    setupNavbarScroll();
});

// Contact form handling (if needed in future)
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            showNotification('Všechna pole jsou povinná', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Zadejte platnou emailovou adresu', 'error');
            return;
        }
        
        // Here you would typically send the form data to a server
        showNotification('Zpráva byla odeslána!', 'success');
        form.reset();
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '9999',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease-out'
    });
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Performance optimization: Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Initialize lazy loading on DOM ready
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Error handling for missing Lucide icons
window.addEventListener('error', function(e) {
    if (e.message.includes('lucide')) {
        console.warn('Lucide icons not loaded properly. Icons may not display.');
    }
});

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projects,
        skills,
        populateProjects,
        populateSkills,
        isValidEmail,
        showNotification
    };
}
