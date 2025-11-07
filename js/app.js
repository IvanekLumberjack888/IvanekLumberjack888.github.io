// ========== TYPED.JS - NAME TYPING ANIMATION ==========
document.addEventListener('DOMContentLoaded', function() {
  const typed = new Typed('#typed-name', {
    strings: ['Ivo Doležal'],
    typeSpeed: 80,
    showCursor: true,
    cursorChar: '|',
    loop: false,
    backSpeed: 0
  });
});

// ========== LUCIDE ICONS INITIALIZATION ==========
lucide.createIcons();

// ========== SKILL PROGRESS BARS ANIMATION ==========
const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'PySpark', level: 55 }
    ]
  },
  {
    category: 'Platforms',
    skills: [
      { name: 'Microsoft Fabric', level: 70 },
      { name: 'Azure', level: 60 },
      { name: 'Notebooks', level: 75 }
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'VS Code', level: 85 },
      { name: 'Git', level: 80 },
      { name: 'Jupyter', level: 80 }
    ]
  }
];

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  skillsData.forEach(skillGroup => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    
    let skillsHTML = `
      <div class="skill-header">
        <div class="skill-icon">📊</div>
        <h3 class="skill-title">${skillGroup.category}</h3>
      </div>
    `;
    
    skillGroup.skills.forEach(skill => {
      skillsHTML += `
        <div class="skill-item">
          <span class="skill-name">${skill.name}</span>
          <div class="skill-bar">
            <div class="skill-progress" style="width: ${skill.level}%"></div>
          </div>
          <span class="skill-level">${skill.level}%</span>
        </div>
      `;
    });
    
    skillCard.innerHTML = skillsHTML;
    container.appendChild(skillCard);
  });
  
  // Trigger animation on scroll
  animateProgressBars();
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll('.skill-progress');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// ========== PROJECTS DATA ==========
const projectsData = [
  {
    title: 'Data Pipeline Automation',
    description: 'Built an automated ETL pipeline using Python and SQL to extract, transform, and load data from multiple sources.',
    tech: ['Python', 'SQL', 'Pandas'],
    github: 'https://github.com/IvanekLumberjack888',
    demo: '#'
  },
  {
    title: 'Microsoft Fabric Learning Project',
    description: 'Hands-on project exploring Microsoft Fabric capabilities, building notebooks and data workflows.',
    tech: ['Fabric', 'Notebooks', 'DAX'],
    github: 'https://github.com/IvanekLumberjack888',
    demo: '#'
  },
  {
    title: 'Web Scraping & Data Analysis',
    description: 'Scrape web data using BeautifulSoup, clean with Pandas, and visualize insights.',
    tech: ['Python', 'BeautifulSoup', 'Pandas'],
    github: 'https://github.com/IvanekLumberjack888',
    demo: '#'
  }
];

function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  projectsData.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    const techBadges = project.tech
      .map(t => `<span class="tech-badge">${t}</span>`)
      .join('');
    
    projectCard.innerHTML = `
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">${techBadges}</div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" class="project-link">GitHub</a>
        ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="project-link">Demo</a>` : ''}
      </div>
    `;
    
    container.appendChild(projectCard);
  });
}

// ========== SMOOTH SCROLL FOR NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-card, .contact-card').forEach(el => {
  observer.observe(el);
});

// ========== INITIALIZE ON PAGE LOAD ==========
window.addEventListener('load', function() {
  renderSkills();
  renderProjects();
  lucide.createIcons();
});
