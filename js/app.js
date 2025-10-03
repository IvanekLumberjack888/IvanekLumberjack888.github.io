// ===============================================
// MAIN APPLICATION SCRIPT
// ===============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeIcons();
    initializeTypingAnimation();
    initializeNavigation();
    renderSkills();
    renderProjects();
    initializeAnimations();
    initializeScrollEffects();
});

// ===============================================
// ICONS INITIALIZATION
// ===============================================
function initializeIcons() {
    if (window.lucide) {
        lucide.createIcons();
    }
}

// ===============================================
// TYPING ANIMATION
// ===============================================
function initializeTypingAnimation() {
    if (window.Typed) {
        new Typed('#typed-name', {
            strings: ['Ivo Doležal'],
            typeSpeed: 100,
            startDelay: 800,
            showCursor: true,
            cursorChar: '|',
            loop: false,
            onComplete: function() {
                // Add fade-in animation to other hero elements
                document.querySelector('.hero-subtitle').classList.add('fade-in-up');
                setTimeout(() => {
                    document.querySelector('.hero-description').classList.add('fade-in-up');
                }, 200);
                setTimeout(() => {
                    document.querySelector('.hero-actions').classList.add('fade-in-up');
                }, 400);
            }
        });
    }
}

// ===============================================
// NAVIGATION
// ===============================================
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'var(--bg-overlay)';
            navbar.style.backdropFilter = 'blur(12px)';
        } else {
            navbar.style.background = 'var(--bg-overlay)';
        }
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ===============================================
// SKILLS DATA & RENDERING
// ===============================================
const skillsData = [
    {
        icon: 'code',
        title: 'Programování',
        skills: [
            { name: 'Python', level: 95 },
            { name: 'SQL', level: 90 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'Web Scraping', level: 80 }
        ]
    },
    {
        icon: 'bar-chart-3',
        title: 'Vizualizace dat',
        skills: [
            { name: 'Power BI', level: 92 },
            { name: 'DAX', level: 85 },
            { name: 'Dashboards', level: 90 },
            { name: 'Reporting', level: 88 }
        ]
    },
    {
        icon: 'settings',
        title: 'Systémy',
        skills: [
            { name: 'SharePoint', level: 85 },
            { name: 'Power Automate', level: 80 },
            { name: 'M365', level: 85 },
            { name: 'Digitalizace', level: 90 }
        ]
    }
];

function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    
    const skillsHTML = skillsData.map(category => `
        <div class="skill-card">
            <div class="skill-header">
                <div class="skill-icon">
                    <i data-lucide="${category.icon}"></i>
                </div>
                <h3 class="skill-title">${category.title}</h3>
            </div>
            <div class="skills-list">
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-bar">
                            <div class="skill-progress" data-level="${skill.level}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    skillsContainer.innerHTML = skillsHTML;
    lucide.createIcons();
}

// ===============================================
// PROJECTS DATA & RENDERING
// ===============================================
const projectsData = [
    {
        title: 'Text Analyzer',
        description: 'Pokročilý nástroj pro analýzu textových dat s využitím Python knihoven pro zpracování přirozeného jazyka.',
        icon: 'file-text',
        tech: ['Python', 'Pandas', 'NLP', 'Data Analysis'],
        github: 'https://github.com/IvanekLumberjack888/text_analyzer',
        demo: 'https://ivaneklumberjack888.github.io/text_analyzer/'
    },
    {
        title: 'Bulls & Cows Game',
        description: 'Interaktivní logická hra implementovaná v Pythonu s elegantním algoritmem pro generování a vyhodnocování tipů.',
        icon: 'gamepad-2',
        tech: ['Python', 'Algoritmy', 'Game Logic', 'CLI'],
        github: 'https://github.com/IvanekLumberjack888/Bulls-and-Cows',
        demo: 'https://ivaneklumberjack888.github.io/Bulls-and-Cows/'
    },
    {
        title: 'Election Scraper',
        description: 'Robustní web scraping nástroj pro automatizovaný sběr a analýzu volebních dat z oficiálních zdrojů.',
        icon: 'globe',
        tech: ['Python', 'Web Scraping', 'BeautifulSoup', 'Data Analysis'],
        github: 'https://github.com/IvanekLumberjack888/Elections-Scraper',
        demo: 'https://ivaneklumberjack888.github.io/Elections-Scraper/'
    },
    {
        title: 'HDP vs Mzdy Analýza',
        description: 'Komplexní SQL analýza ekonomických dat zaměřená na vztah mezi HDP a průměrnými mzdami v období 2006-2018.',
        icon: 'trending-up',
        tech: ['SQL', 'PostgreSQL', 'Data Analysis', 'Economics'],
        github: 'https://github.com/IvanekLumberjack888/sql-projekt-engeto',
        demo: 'https://ivaneklumberjack888.github.io/sql-projekt-engeto/'
    },
    {
        title: 'Power BI Dashboard',
        description: 'Interaktivní business intelligence dashboard s pokročilými DAX formulemi a dynamickými vizualizacemi.',
        icon: 'bar-chart',
        tech: ['Power BI', 'DAX', 'Data Modeling', 'Visualization'],
        github: 'https://github.com/IvanekLumberjack888/PowerBI-for-Engeto',
        demo: 'https://ivaneklumberjack888.github.io/PowerBI-for-Engeto/'
    }
];

function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    const projectsHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-title">
                    <div class="project-icon">
                        <i data-lucide="${project.icon}"></i>
                    </div>
                    ${project.title}
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-footer">
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i data-lucide="github"></i>
                        GitHub
                    </a>
                    <a href="${project.demo}" target="_blank" class="project-link">
                        <i data-lucide="external-link"></i>
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    projectsContainer.innerHTML = projectsHTML;
    lucide.createIcons();
}

// ===============================================
// SCROLL ANIMATIONS
// ===============================================
function initializeScrollEffects() {
    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const level = bar.getAttribute('data-level');
                setTimeout(() => {
                    bar.style.width = level + '%';
                }, Math.random() * 500);
            }
        });
    };
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Trigger skill bars animation when skills section is visible
                if (entry.target.id === 'skills') {
                    setTimeout(animateSkillBars, 500);
                }
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe cards for staggered animations
    const cards = document.querySelectorAll('.skill-card, .project-card, .contact-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// ===============================================
// GENERAL ANIMATIONS
// ===============================================
function initializeAnimations() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ===============================================
// UTILITY FUNCTIONS
// ===============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===============================================
// PERFORMANCE OPTIMIZATIONS
// ===============================================
// Optimize scroll listeners
window.addEventListener('scroll', debounce(() => {
    // Your scroll functions here
}, 16));

// Preload critical resources
function preloadResources() {
    const links = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap',
        'styles/style.css'
    ];
    
    links.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
preloadResources();
