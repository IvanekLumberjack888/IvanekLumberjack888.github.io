/**
 * =====================================================
 * MODERN DATA ENGINEER PORTFOLIO - COMPLETE JAVASCRIPT
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

// =====================================================h
// CONFIGURATION & DATA
// =====================================================

/**
 * Skills data structure
 * Each skill group contains a category name and individual skills with levels
 */
const skillsData = [
    {
        category: 'Data Engineering',
        icon: 'database',
        skills: [
            { name: 'Python', level: 85 },
            { name: 'SQL', level: 90 },
            { name: 'PySpark', level: 65 },
            { name: 'ETL Pipelines', level: 75 }
        ]
    },
    {
        category: 'Microsoft Fabric',
        icon: 'cloud',
        skills: [
            { name: 'Notebooks', level: 80 },
            { name: 'OneLake', level: 70 },
            { name: 'Data Factory', level: 65 },
            { name: 'Power BI', level: 85 }
        ]
    },
    {
        category: 'Development Tools',
        icon: 'code',
        skills: [
            { name: 'Git & GitHub', level: 85 },
            { name: 'VS Code', level: 90 },
            { name: 'Jupyter', level: 85 },
            { name: 'REST APIs', level: 75 }
        ]
    },
        // AI & Automation – pozn.: používáme evropské pomlčky (–) ne americké (—)
    {
                category: 'AI & Automation',
                icon: 'cpu',
                skills: [
                    { name: 'AIVOS – Personal AI OS', level: 75 },
                    { name: 'Ollama – lokální LLM', level: 70 },
                    { name: 'Next.js', level: 65 },
                    { name: 'Notion API', level: 60 }
                            ]
    }
];

/**
 * Projects data structure
 * Each project includes title, description, technologies, and links
 */
const projectsData = [
    {
        title: 'SQL Data Analysis Project',
        description: 'Comprehensive analysis of Czech economic data (2006-2018) using advanced SQL queries, data modeling, and statistical analysis. Created complex views and optimized queries for performance.',
        tech: ['SQL', 'PostgreSQL', 'Data Analysis', 'Statistics'],
        github: 'https://github.com/IvanekLumberjack888/sql-projekt-engeto',
        demo: null,
        icon: 'database'
    },
    {
        title: 'Election Data Scraper',
        description: 'Python-based web scraping tool for collecting and analyzing Czech election data. Implements BeautifulSoup for data extraction and pandas for processing with CSV output functionality.',
        tech: ['Python', 'BeautifulSoup', 'Pandas', 'Web Scraping'],
        github: 'https://github.com/IvanekLumberjack888/Elections-Scraper',
        demo: null,
        icon: 'search'
    },
    {
        title: 'Power BI Dashboard',
        description: 'Interactive business intelligence dashboard built with Power BI. Features data modeling, DAX calculations, and dynamic visualizations for business insights and decision-making.',
        tech: ['Power BI', 'DAX', 'Data Modeling', 'Visualization'],
        github: '#',
        demo: null,
        icon: 'bar-chart-2',
        status: 'in-progress'
    },
    {
                title: 'AIVOS – Personal AI OS',
                description: 'Osobní AI operační systém postavený na Next.js s napojením na Notion a lokálním LLM přes Ollama. P.A.R.A. struktura, interaktivní chat a real-time dashboard.',
                tech: ['Next.js', 'TypeScript', 'Notion API', 'Ollama', 'Tailwind CSS'],
                github: '#',
                demo: null,
                icon: 'cpu',
                status: 'in-progress'
    }
];

// =====================================================
// INITIALIZATION
// =====================================================

/**
 * Main initialization function
 * Runs when DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
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

/**
 * Initialize the typing animation for the hero name
 * Uses Typed.js library for smooth character-by-character reveal
 */
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
            onComplete: function(self) {
                // Keep cursor visible after typing completes
                self.cursor.style.animation = 'blink 1s infinite';
            }
        });
    }
}

// =====================================================
// SKILLS RENDERING
// =====================================================

/**
 * Dynamically render skills sections with animated progress bars
 * Creates skill cards with categories and individual skill items
 */
function renderSkills() {
    const container = document.getElementById('skills-container');
    
    if (!container) {
        console.warn('Skills container not found');
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create skill card for each category
    skillsData.forEach((skillGroup, groupIndex) => {
        const skillCard = createSkillCard(skillGroup, groupIndex);
        container.appendChild(skillCard);
    });
    
    // Trigger animation after a short delay
    setTimeout(() => {
        animateProgressBars();
    }, 300);
}

/**
 * Create a skill card element
 * @param {Object} skillGroup - The skill category data
 * @param {number} groupIndex - Index for animation delay
 * @returns {HTMLElement} The constructed skill card
 */
function createSkillCard(skillGroup, groupIndex) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.style.animationDelay = `${groupIndex * 0.1}s`;
    
    // Build the card HTML
    let html = `
        <div class="skill-header">
            <div class="skill-icon">
                <i data-lucide="${skillGroup.icon}"></i>
            </div>
            <h3 class="skill-title">${skillGroup.category}</h3>
        </div>
    `;
    
    // Add each skill item
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

/**
 * Animate all progress bars
 * Uses Intersection Observer to trigger animations when visible
 */
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const level = progressBar.getAttribute('data-level');
                
                // Animate to the target width
                setTimeout(() => {
                    progressBar.style.width = `${level}%`;
                }, 100);
                
                // Stop observing once animated
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

/**
 * Dynamically render project cards
 * Creates project showcase with descriptions, tech stacks, and links
 */
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    if (!container) {
        console.warn('Projects container not found');
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create project card for each project
    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        container.appendChild(projectCard);
    });
}

/**
 * Create a project card element
 * @param {Object} project - The project data
 * @param {number} index - Index for animation delay
 * @returns {HTMLElement} The constructed project card
 */
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Add in-progress indicator if applicable
    const statusBadge = project.status === 'in-progress' 
        ? '<span class="tech-badge" style="background: linear-gradient(135deg, #7c3aed, #8b5cf6);">In Progress</span>'
        : '';
    
    // Build tech badges
    const techBadges = project.tech
        .map(tech => `<span class="tech-badge">${tech}</span>`)
        .join('');
    
    // Build project links
    let linksHtml = '<div class="project-links">';
    
    if (project.github && project.github !== '#') {
        linksHtml += `
            <a href="${project.github}" target="_blank" rel="noopener" class="project-link">
                <i data-lucide="github"></i>
                <span>View Code</span>
            </a>
        `;
    }
    
    if (project.demo) {
        linksHtml += `
            <a href="${project.demo}" target="_blank" rel="noopener" class="project-link">
                <i data-lucide="external-link"></i>
                <span>Live Demo</span>
            </a>
        `;
    }
    
    linksHtml += '</div>';
    
    // Construct the complete card
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

/**
 * Initialize Lucide icons throughout the page
 * Must be called after dynamic content is rendered
 */
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

/**
 * Initialize smooth scrolling for anchor links
 * Handles navigation menu clicks and scroll indicator
 */
function initializeScrollBehavior() {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hide scroll indicator after scrolling
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
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

/**
 * Initialize intersection observer for scroll-triggered animations
 * Adds fade-in effects as elements come into view
 */
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
    
    // Observe all major sections and cards
    const elementsToAnimate = document.querySelectorAll(
        '.about-main, .about-tech, .highlight-item, .tech-category, ' +
        '.skill-card, .project-card, .contact-card'
    );
    
    elementsToAnimate.forEach(el => observer.observe(el));
}

// =====================================================
// UTILITY FUNCTIONS
// =====================================================

/**
 * Debounce function to limit how often a function can fire
 * Useful for scroll and resize event handlers
 * @param {Function} func - The function to debounce
 * @param {number} wait - Milliseconds to wait
 * @returns {Function} Debounced function
 */
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

/**
 * Check if an element is in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if element is visible in viewport
 */
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

/**
 * Additional initialization after all resources are loaded
 * Ensures icons are properly rendered for any late-loading content
 */
window.addEventListener('load', () => {
    // Reinitialize icons to catch any that were missed
    initializeIcons();
    
    // Log success message for debugging
    console.log('Portfolio loaded successfully');
});
