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
        icon: "code"
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

// Skills data
const skills = [
    { 
        category: "Programování", 
        items: ["Python", "SQL", "PostgreSQL", "Web Scraping"], 
        icon: "code" 
    },
    { 
        category: "Vizualizace", 
        items: ["Power BI", "DAX", "Dashboards", "Reporting"], 
        icon: "bar-chart-3" 
    },
    { 
        category: "Systémy", 
        items: ["SharePoint", "Power Automate", "M365", "Digitalizace"], 
        icon: "wrench" 
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Populate projects
    populateProjects();
    
    // Populate skills
    populateSkills();
    
    // Setup smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Setup intersection observer for animations
    setupAnimations();
    
    // Re-initialize icons after dynamic content is added
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
});

// Populate projects section
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card hover-lift fade-in-up">
            <div class="project-header">
                <div class="project-title-with-icon">
                    <div class="project-icon">
                        <i data-lucide="${project.icon}"></i>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                </div>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="project-content">
                <div class="tech-badges">
                    ${project.tech.map(tech => `
                        <span class="badge">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-buttons">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-green">
                        <i data-lucide="github"></i>
                        GitHub
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-green">
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
    
    skillsGrid.innerHTML = skills.map(skillGroup => `
        <div class="skill-card hover-lift fade-in-up">
            <div class="skill-header">
                <div class="skill-icon">
                    <i data-lucide="${skillGroup.icon}"></i>
                </div>
                <h3 class="skill-category">${skillGroup.category}</h3>
            </div>
            <div class="skill-content">
                <div class="skill-items">
                    ${skillGroup.items.map(skill => `
                        <div class="skill-item">
                            <div class="skill-dot"></div>
                            <span class="skill-name">${skill}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Setup smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup intersection observer for animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in-up elements
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for animation trigger
const style = document.createElement('style');
style.textContent = `
    .fade-in-up:not(.animate) {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .fade-in-up.animate {
        animation: fadeInUp 0.8s ease-out forwards;
    }
`;
document.head.appendChild(style);
