// Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

// Typed.js animace pro jméno
document.addEventListener('DOMContentLoaded', () => {
  new Typed('#typed-name', {
    strings: ['Ivo Doležal'],
    typeSpeed: 110,
    startDelay: 400,
    showCursor: true,
    cursorChar: '|',
    backSpeed: 40,
    loop: false
  });
});

// Dynamické sekce: projekty, dovednosti
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
    icon: "gamepad"
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

const skills = [
  { 
    category: "Programování", 
    items: ["Python", "SQL", "PostgreSQL", "Web Scraping"], 
    icon: "code",
    levels: [95, 85, 90, 80]
  },
  { 
    category: "Vizualizace", 
    items: ["Power BI", "DAX", "Dashboards", "Reporting"], 
    icon: "bar-chart-3",
    levels: [90, 80, 95, 90]
  },
  { 
    category: "Systémy", 
    items: ["SharePoint", "Power Automate", "M365", "Digitalizace"], 
    icon: "wrench",
    levels: [85, 75, 85, 80]
  }
];

// Projekty
function populateProjects() {
  const grid = document.getElementById('projects-grid');
  if(!grid) return;
  grid.innerHTML = projects.map(p => `
    <div class="project-card glass-card">
      <div class="project-title" style="font-weight:700;font-size:1.2rem;"><i data-lucide="${p.icon}"></i> ${p.title}</div>
      <div style="margin:1rem 0;color:#444">${p.description}</div>
      <div class="tech-badges">
        ${p.tech.map(tech => `<span class="badge">${tech}</span>`).join('')}
      </div>
      <div style="margin-top:1rem;">
        <a href="${p.github}" target="_blank" class="btn btn-outline" style="margin-right:0.5rem;"><i data-lucide="github"></i> GitHub</a>
        <a href="${p.demo}" target="_blank" class="btn btn-primary"><i data-lucide="external-link"></i> Demo</a>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

// Dovednosti
function populateSkills() {
  const grid = document.getElementById('skills-grid');
  if(!grid) return;
  grid.innerHTML = skills.map(s => `
    <div class="skill-card glass-card">
      <div style="font-size:1.2rem;font-weight:700;margin-bottom:0.7rem;"><i data-lucide="${s.icon}"></i> ${s.category}</div>
      ${s.items.map((item, idx) => `
        <div style="margin:0.6rem 0;">
          <span style="font-weight:500">${item}</span>
          <div class="progress-bar"><div class="progress-bar-fill" style="width:${s.levels[idx]}%"></div></div>
        </div>
      `).join('')}
    </div>
  `).join('');
  lucide.createIcons();
}

// Inicializace
document.addEventListener('DOMContentLoaded', () => {
  populateProjects();
  populateSkills();
});
