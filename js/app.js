// Professional Portfolio App - Ivo Doležal // Data Engineer & System Innovator

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

// Skills data (for charts)
const skillsTiles = [
  {
    icon: "code",
    title: "Programování",
    list: [
      {name: "Python", value: 90},
      {name: "SQL", value: 85},
      {name: "PostgreSQL", value: 80},
      {name: "Web Scraping", value: 78},
    ]
  },
  {
    icon: "bar-chart-3",
    title: "Vizualizace",
    list: [
      {name:"Power BI", value: 92},
      {name:"DAX", value: 85},
      {name:"Dashboards", value: 88},
      {name:"Reporting", value: 80}
    ]
  },
  {
    icon: "settings",
    title: "Systémy",
    list: [
      {name:"SharePoint", value: 80},
      {name:"Power Automate", value: 75},
      {name:"M365", value: 80},
      {name:"Digitalizace", value: 87}
    ]
  }
];

// Init functions and dynamic rendering
document.addEventListener('DOMContentLoaded', function() {
  if(window.lucide) lucide.createIcons();
  new Typed('#typed-name', {
    strings: ['Ivo Doležal'],
    typeSpeed: 130,
    startDelay: 400,
    showCursor: true,
    cursorChar: '|',
    backSpeed: 50,
    loop: false
  });
  populateProjects();
  populateSkillsTiles();
  animateSkillTiles();
});

function populateProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <div class="project-card glass-card">
      <div class="project-title"><i data-lucide="${p.icon}"></i> ${p.title}</div>
      <div style="margin:0.7rem 0 1rem 0; color:inherit">${p.description}</div>
      <div class="tech-badges">
        ${p.tech.map(tech => `<span class="badge">${tech}</span>`).join('')}
      </div>
      <div style="margin-top:1.0rem; display:flex; gap:0.7rem;">
        <a href="${p.github}" target="_blank" class="btn btn-outline"><i data-lucide="github"></i> GitHub</a>
        <a href="${p.demo}" target="_blank" class="btn btn-primary"><i data-lucide="external-link"></i> Demo</a>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function populateSkillsTiles() {
  const grid = document.getElementById('skills-tiles');
  if (!grid) return;
  grid.innerHTML = skillsTiles.map(tile => `
    <div class="skill-tile glass-card">
      <div class="skill-icon-main"><i data-lucide="${tile.icon}"></i></div>
      <h3>${tile.title}</h3>
      <ul>
        ${tile.list.map(skill => `
          <li>
            <span class="skill-label">${skill.name}</span>
            <span class="skill-bar"><span class="skill-bar-fill" data-value="${skill.value}"></span></span>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join('');
  lucide.createIcons();
}

function animateSkillTiles() {
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      let val = bar.getAttribute('data-value');
      bar.style.width = "0";
      setTimeout(() => { bar.style.width = val+"%"; },100);
    });
  }, 240);
}
