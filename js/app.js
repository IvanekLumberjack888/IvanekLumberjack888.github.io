/**
 * =====================================================
 * MODERN DATA PLATFORM PORTFOLIO - COMPLETE JAVASCRIPT
 * =====================================================
 *
 * This script handles:
 * - Name typing animation
 * - Dynamic skills generation with progress bars
 * - Dynamic projects generation
 * - Smooth scroll behavior
 * - Icon initialization
 * - Scroll animations
 */

// =====================================================
// CONFIGURATION & DATA
// =====================================================

const skillsData = [
    {
        category: 'Azure Integration',
        icon: 'workflow',
        skills: [
            { name: 'Azure Data Factory', level: 75 },
            { name: 'Event Hub', level: 70 },
            { name: 'Service Bus', level: 65 },
            { name: 'Enterprise Data Integrations', level: 75 }
        ]
    },
    {
        category: 'Data Platform',
        icon: 'database',
        skills: [
            { name: 'Databricks', level: 75 },
            { name: 'Spark Data Processing', level: 65 },
            { name: 'SQL Investigations', level: 80 },
            { name: 'Pipeline Monitoring', level: 70 }
        ]
    },
    {
        category: 'Copilot & Knowledge Tools',
        icon: 'bot',
        skills: [
            { name: 'Microsoft Copilot', level: 80 },
            { name: 'Copilot Agents', level: 70 },
            { name: 'Documentation Search', level: 75 },
            { name: 'Knowledge Curation', level: 70 }
        ]
    },
    {
        category: 'Development & Analytics',
        icon: 'code',
        skills: [
            { name: 'Python Scripting', level: 75 },
            { name: 'SQL', level: 80 },
            { name: 'Power BI', level: 75 },
            { name: 'DAX', level: 65 }
        ]
    },
    {
        category: 'Tools & Delivery',
        icon: 'terminal',
        skills: [
            { name: 'Git & GitHub', level: 80 },
            { name: 'VS Code', level: 80 },
            { name: 'Azure DevOps', level: 75 },
            { name: 'Vercel Deployment', level: 65 }
        ]
    }
];

const projectsData = [
    {
        title: 'AIVOS – Personal AI Workspace',
        description: 'Personal AI workspace prototype built with Next.js and deployed on Vercel. It experiments with YouTube playlist-based content curation, preference-based filtering, structured knowledge organization and future local LLM processing through Ollama.',
        tech: ['Next.js', 'TypeScript', 'Vercel Deployment', 'YouTube Integration', 'Knowledge Base', 'Ollama'],
        github: '#',
        demo: 'https://aivos-two.vercel.app/',
        icon: 'cpu',
        status: 'prototype'
    },
    {
        title: 'Power BI Dashboard – TimberRide',
        description: 'Interactive Power BI dashboard created as an Engeto project. It includes KPI reporting, customer and vehicle analysis, DAX measures, data modeling, forecasting and What-If scenarios.',
        tech: ['Power BI', 'DAX', 'Data Modeling', 'KPI Reporting', 'What-If Analysis'],
        github: 'https://github.com/IvanekLumberjack888/PowerBI-for-Engeto',
        demo: null,
        icon: 'bar-chart-2'
    },
    {
        title: 'SQL Data Analysis Project',
        description: 'Analysis of Czech economic data using SQL queries, data modeling and analytical views. The project demonstrates SQL fundamentals, data exploration and practical analytical thinking.',
        tech: ['SQL', 'PostgreSQL', 'Data Analysis', 'Statistics'],
        github: 'https://github.com/IvanekLumberjack888/sql-projekt-engeto',
        demo: null,
        icon: 'database'
    },
    {
        title: 'Election Data Scraper',
        description: 'Python-based web scraping tool for collecting and processing Czech election data. The project uses BeautifulSoup for extraction and pandas for structured CSV output.',
        tech: ['Python', 'BeautifulSoup', 'Pandas', 'Web Scraping'],
        github: 'https://github.com/IvanekLumberjack888/Elections-Scraper',
        demo: null,
        icon: 'search'
    },
    {
        title: 'Copilot Support Agents',
        description: 'Custom Copilot-based assistants for support work, including retrieving information from technical documentation, preparing clarification questions for integration requests and drafting Azure DevOps PBI/task descriptions with acceptance criteria.',
        tech: ['Microsoft Copilot', 'AI Agents', 'Technical Documentation', 'Azure DevOps', 'Support Tools'],
        github: '#',
        demo: null,
        icon: 'bot',
        status: 'prototype'
    },
    {
        title: 'Azure Integration Learning Lab',
        description: 'Personal learning track focused on Azure Data Factory, event-driven architecture, Databricks, Service Bus, Event Hub and cloud integration patterns.',
        tech: ['Azure Data Factory', 'Event Hub', 'Service Bus', 'Databricks'],
        github: '#',
        demo: null,
        icon: 'workflow',
        status: 'in-progress'
    }
];

// =====================================================
// INITIALIZATION
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    initializeTypedName();
    renderSkills();
    renderProjects();
    initializeIcons();
    initializeScrollBehavior();
    initializeAnimations();
});

// =====================================================
// TYPED NAME ANIMATION
// =====================================================

function initializeTypedName() {
    const typedElement = document.getElementById('typed-name');

    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('#typed-name', {
            strings: ['Ivo Doležal'],
            typeSpeed: 80,
            startDelay: 500,
            showCursor: true,
            cursorChar: '|',
            loop: false,
            onComplete: function (self) {
                self.cursor.style.animation = 'blink 1s infinite';
            }
        });
    }
}

// =====================================================
// SKILLS RENDERING
// =====================================================

function renderSkills() {
    const container = document.getElementById('skills-container');

    if (!container) {
        console.warn('Skills container not found');
        return;
    }

    container.innerHTML = '';

    skillsData.forEach((skillGroup, groupIndex) => {
        const skillCard = createSkillCard(skillGroup, groupIndex);
        container.appendChild(skillCard);
    });

    setTimeout(() => {
        animateProgressBars();
        initializeIcons();
    }, 300);
}

function createSkillCard(skillGroup, groupIndex) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.style.animationDelay = `${groupIndex * 0.1}s`;

    let html = `
        <div class="skill-header">
            <div class="skill-icon">
                <i data-lucide="${skillGroup.icon}"></i>
            </div>
            <h3 class="skill-title">${skillGroup.category}</h3>
        </div>
    `;

    skillGroup.skills.forEach(skill => {
        html += `
            <div class="skill-item">
                <div class="skill-name">
                    <span>${skill.name}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" data-level="${skill.level}"></div>
                </div>
            </div>
        `;
    });

    card.innerHTML = html;
    return card;
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const level = progressBar.getAttribute('data-level');

                setTimeout(() => {
                    progressBar.style.width = `${level}%`;
                }, 100);

                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });

    progressBars.forEach(bar => observer.observe(bar));
}

// =====================================================
// PROJECTS RENDERING
// =====================================================

function renderProjects() {
    const container = document.getElementById('projects-container');

    if (!container) {
        console.warn('Projects container not found');
        return;
    }

    container.innerHTML = '';

    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        container.appendChild(projectCard);
    });

    initializeIcons();
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;

    let statusBadge = '';

    if (project.status === 'in-progress') {
        statusBadge = '<span class="tech-badge status-badge">In Progress</span>';
    }

    if (project.status === 'prototype') {
        statusBadge = '<span class="tech-badge status-badge">Prototype</span>';
    }

    const techBadges = project.tech
        .map(tech => `<span class="tech-badge">${tech}</span>`)
        .join('');

    let linksHtml = '<div class="project-links">';

    if (project.github && project.github !== '#') {
        linksHtml += `
            <a href="${project.github}" target="_blank" rel="noopener" class="project-link">
                <i data-lucide="github"></i>
                <span>View Code</span>
            </a>
        `;
    }

    if (project.demo && project.demo !== '#') {
        linksHtml += `
            <a href="${project.demo}" target="_blank" rel="noopener" class="project-link">
                <i data-lucide="external-link"></i>
                <span>Live Demo</span>
            </a>
        `;
    }

    linksHtml += '</div>';

    card.innerHTML = `
        <div class="project-header">
            <div class="project-icon">
                <i data-lucide="${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
        </div>

        <p class="project-description">${project.description}</p>

        <div class="project-tech">
            ${statusBadge}
            ${techBadges}
        </div>

        ${linksHtml}
    `;

    return card;
}

// =====================================================
// ICON INITIALIZATION
// =====================================================

function initializeIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn('Lucide icons library not loaded');
    }
}

// =====================================================
// SCROLL BEHAVIOR
// =====================================================

function initializeScrollBehavior() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function () {
            const aboutSection = document.querySelector('#about');

            if (aboutSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = aboutSection.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
}

// =====================================================
// SCROLL ANIMATIONS
// =====================================================

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
        '.about-main, .about-tech, .highlight-item, .tech-category, ' +
        '.skill-card, .project-card, .contact-card'
    );

    elementsToAnimate.forEach(el => observer.observe(el));
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

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

function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// =====================================================
// WINDOW LOAD EVENT
// =====================================================

window.addEventListener('load', () => {
    initializeIcons();
    console.log('Portfolio loaded successfully');
});
