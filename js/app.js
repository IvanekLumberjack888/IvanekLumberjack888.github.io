document.addEventListener('DOMContentLoaded', function() {
  if(window.lucide) lucide.createIcons();
  new Typed('#typed-name', {
    strings: ['Ivo Doležal'],
    typeSpeed: 110,
    startDelay: 350,
    showCursor: true,
    cursorChar: '|',
    loop: false
  });
  populateProjects();
  populateSkillsTiles();
  animateSkillTiles();
});

const projects = [
  { title:"Text Analyzer", description:"Pokročilý nástroj pro analýzu textových dat s využitím Python knihoven pro NLP a datovou analytiku včetně srozumitelného výsledného reportingu a vizualizace.", tech:["Python","Pandas","NLP","Reporting"], github:"https://github.com/IvanekLumberjack888/text_analyzer", demo:"https://ivaneklumberjack888.github.io/text_analyzer/", icon: "code"},
  { title:"Bulls & Cows", description:"Interaktivní logická hra implementovaná v Pythonu s unikátním algoritmem a uživatelskou CLI, určená pro zábavu i výuku algoritmického myšlení.", tech:["Python","Algoritmy","Game Logic"], github:"https://github.com/IvanekLumberjack888/Bulls-and-Cows", demo:"https://ivaneklumberjack888.github.io/Bulls-and-Cows/", icon: "gamepad-2"},
  { title:"Election Scraper", description:"Web scraping nástroj pro sběr a detailní analýzu volebních dat z praxe. Automatizuje stahování a strukturování dat pro následnou vizualizaci a reporty.", tech:["Python","Web Scraping","Data Analysis"], github:"https://github.com/IvanekLumberjack888/Elections-Scraper", demo:"https://ivaneklumberjack888.github.io/Elections-Scraper/", icon: "globe"},
  { title:"Analýza HDP vs mzdy", description:"Komplexní SQL analýza ekonomických dat zaměřená na vztah HDP a průměrných mezd v období 2006-2018. Plně ovladatelné v PostgreSQL a Power BI.", tech:["SQL","PostgreSQL","Power BI","Data Analysis"], github:"https://github.com/IvanekLumberjack888/sql-projekt-engeto", demo:"https://ivaneklumberjack888.github.io/sql-projekt-engeto/", icon: "database"},
  { title:"PowerBI pro Engeto", description:"Interaktivní dashboard a vizualizace dat v Power BI s využitím pokročilých DAX funkcí a dynamických prvků pro živou analytiku.", tech:["Power BI","DAX","Data Visualization"], github:"https://github.com/IvanekLumberjack888/PowerBI-for-Engeto", demo:"https://ivaneklumberjack888.github.io/PowerBI-for-Engeto/", icon: "bar-chart-3"}
];

function populateProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <div class="project-card glass-card">
      <div class="project-title"><i data-lucide="${p.icon}"></i> ${p.title}</div>
      <div style="margin:0.7rem 0 0.7rem 0; color:inherit">${p.description}</div>
      <div class="tech-badges">${p.tech.map(tech => `<span class="badge">${tech}</span>`).join('')}</div>
      <div style="margin-top:0.7rem; display:flex; gap:0.7rem;">
        <a href="${p.github}" target="_blank" class="btn btn-outline">GitHub</a>
        <a href="${p.demo}" target="_blank" class="btn btn-primary">Demo</a>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

const skillTiles = [
  {
    icon: "code",
    title: "Programování",
    list: [
      {name: "Python", value: 93},
      {name: "SQL", value: 89},
      {name: "PostgreSQL", value: 87},
      {name: "Web Scraping", value: 87}
    ]
  },
  {
    icon: "bar-chart-3",
    title: "Vizualizace",
    list: [
      {name:"Power BI", value: 95},
      {name:"DAX", value: 88},
      {name:"Dashboards", value: 93},
      {name:"Reporting", value: 88}
    ]
  },
  {
    icon: "settings",
    title: "Systémy",
    list: [
      {name:"SharePoint", value: 85},
      {name:"Power Automate", value: 80},
      {name:"M365", value: 80},
      {name:"Digitalizace", value: 90}
    ]
  }
];

function populateSkillsTiles() {
  const grid = document.getElementById('skills-tiles');
  if (!grid) return;
  grid.innerHTML = skillTiles.map(tile => `
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
      setTimeout(() => { bar.style.width = val+"%"; },110);
    });
  }, 350);
}
