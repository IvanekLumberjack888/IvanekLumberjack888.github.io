// Inicializace po načtení stránky
document.addEventListener('DOMContentLoaded', function() {
    initializeIcons();
    initializeTyping();
    renderSkills();
    renderProjects();
    initializeScrollEffects();
});

// Inicializace ikon
function initializeIcons() {
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Typing efekt pro jméno
function initializeTyping() {
    if (window.Typed) {
        new Typed('#typed-name', {
            strings: ['Ivo Doležal'],
            typeSpeed: 100,
            startDelay: 500,
            showCursor: true,
            cursorChar: '|',
            loop: false
        });
    }
}

// Data pro dovednosti
const skillsData = [
    {
        icon: 'code',
        title: 'Programování',
        skills: [
            { name: 'Python', level: 95 },
            { name: 'SQL', level: 90 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'Web Scraping', level: 88 }
        ]
    },
    {
        icon: 'bar-chart-3',
        title: 'Vizualizace dat',
        skills: [
            { name: 'Power BI', level: 92 },
            { name: 'DAX', level: 87 },
            { name: 'Dashboards', level: 90 },
            { name: 'Reporting', level: 85 }
        ]
    },
    {
        icon: 'settings',
        title: 'Systémy',
        skills: [
            { name: 'SharePoint', level: 88 },
            { name: 'Power Automate', level: 82 },
            { name: 'M365', level: 85 },
            { name: 'Digitalizace', level: 90 }
        ]
    }
];

// Data pro projekty
const projectsData = [
    {
        title: 'Text Analyzer',
        description: 'Pokročilý nástroj pro analýzu textových dat s využitím Python knihoven a NLP algoritmů.',
        icon: 'file-text',
        tech: ['Python', 'Pandas', 'NLP'],
        github: 'https://github.com/IvanekLumberjack888/text_analyzer',
        demo: 'https://ivaneklumberjack888.github.io/text_analyzer/'
    },
    {
        title: 'Bulls & Cows Game',
        description: 'Interaktivní logická hra implementovaná v Pythonu s elegantním algoritmem.',
        icon: 'gamepad-2',
        tech: ['Python', 'Algoritmy', 'Game Logic'],
        github: 'https://github.com/IvanekLumberjack888/Bulls-and-Cows',
        demo: 'https://ivaneklumberjack888.github.io/Bulls-and-Cows/'
    },
    {
        title: 'Election Scraper',
        description: 'Robustní web scraping nástroj pro sběr a analýzu volebních dat.',
        icon: 'globe',
        tech: ['Python', 'Web Scraping', 'Data Analysis'],
        github: 'https://github.com/IvanekLumberjack888/Elections-Scraper',
        demo: 'https://ivaneklumberjack888.github.io/Elections-Scraper/'
    },
    {
        title: 'HDP vs Mzdy Analýza',
        description: 'Komplexní SQL analýza vztahu mezi HDP a průměrnými mzdami v ČR.',
        icon: 'trending-up',
        tech: ['SQL', 'PostgreSQL', 'Data Analysis'],
        github: 'https://github.com/IvanekLumberjack888/sql-projekt-engeto',
        demo: 'https://ivaneklumberjack888.github.io/sql-projekt-engeto/'
    },
    {
        title: 'Power BI Dashboard',
        description: 'Interaktivní business intelligence dashboard s pokročilými DAX formulemi.',
        icon: 'bar-chart',
        tech: ['Power BI', 'DAX', 'Data Modeling'],
        github: 'https://github.com/IvanekLumberjack888/PowerBI-for-Engeto',
        demo: 'https://ivaneklumberjack888.github.io/PowerBI-for-Engeto/'
    }
];

// Renderování dovedností
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const skillsHTML = skillsData.map(category => `
        <div class="skill-card glass-card">
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
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    container.innerHTML = skillsHTML;
    lucide.createIcons();
}

// Renderování projektů
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const projectsHTML = projectsData.map(project => `
        <div class="project-card glass-card">
            <div class="project-header">
                <div class="project-icon">
                    <i data-lucide="${project.icon}"></i>
                </div>
                <div>
                    <h3 class="project-title">${project.title}</h3>
                </div>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link">
                    <i data-lucide="github"></i>
                    GitHub
                </a>
                <a href="${project.demo}" target="_blank" class="project-link">
                    <i data-lucide="external-link"></i>
                    Demo
                </a>
            </div>
        </div>
    `).join('');

    container.innerHTML = projectsHTML;
    lucide.createIcons();
}

// Animace scroll efektů
function initializeScrollEffects() {
    // Animace skill barů
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

    // Observer pro skills sekci
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateSkillBars, 500);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }

    // Smooth scrolling pro navigaci
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
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
}
