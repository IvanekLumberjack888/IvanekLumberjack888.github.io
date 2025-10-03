document.addEventListener('DOMContentLoaded', function() {
  if(window.lucide) lucide.createIcons();
  new Typed('#typed-name', {
    strings: ['Ivo Doležal'],
    typeSpeed: 110,
    startDelay: 480,
    showCursor: true,
    cursorChar: '|',
    loop: false
  });
  populateProjects();
  populateSkillsTiles();
  animateSkillTiles();
});

const projects = [
  { title:"Text Analyzer", description:"Pokročilý nástroj pro analýzu textových dat s využitím Python knihoven a NLP, nasazeno i s interaktivním GUI. Flexibilní pro různé typy dat i vstupů.", tech:["Python","Pandas","NLP","Streamlit"], github:"https://github.com/IvanekLumberjack888/text_analyzer", demo:"https://ivaneklumberjack888.github.io/text_analyzer/", icon: "code"},
  { title:"Bulls & Cows", description:"Interaktivní logická hra v Pythonu s využitím čistého algoritmu pro generování i vyhodnocení tipů. Doplněno o statistiky a snadné rozšíření.", tech:["Python","Algoritmy","Game Logic"], github:"https://github.com/IvanekLumberjack888/Bulls-and-Cows", demo:"https://ivaneklumberjack888.github.io/Bulls-and-Cows/", icon: "gamepad-2"},
  { title:"Election Scraper", description:"Robustní scraper pro sběr a analýzu volebních dat (Python). Data transformována do čistých csv i pro Power BI (včetně vizualizací trendů).", tech:["Python","Web Scraping","Pandas"], github:"https://github.com/IvanekLumberjack888/Elections-Scraper", demo:"https://ivaneklumberjack888.github.io/Elections-Scraper/", icon: "globe"},
  { title:"Analýza HDP vs mzdy", description:"Komplexní SQL analýza vztahu mezi HDP a mzdami v ČR pro roky 2006-2018 – tvorba datasetu, vizualizace a ekonomické interpretace.", tech:["SQL","PostgreSQL","Data Analysis"], github:"https://github.com/IvanekLumberjack888/sql-projekt-engeto", demo:"https://ivaneklumberjack888.github.io/sql-projekt-engeto/", icon: "database"},
  { title:"PowerBI pro Engeto", description:"Dashboard v Power BI s detailními DAX vzorci, možností filtrování a interakce, napojený na model z reálného projektu.", tech:["Power BI","DAX","Vizualizace"], github:"https://github.com/IvanekLumberjack888/PowerBI-for-Engeto", demo:"https://ivaneklumberjack888.github.io/PowerBI-for-Engeto/", icon: "bar-chart-3"}
];

function populateProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => `
    <div class="project-card glass-card">
      <div class="project-title"><i data-lucide="${p.icon}"></i> ${p.title}</div>
      <div style="margin:0.7rem 0 0.8rem 0; color:inherit">${p.description}</div>
      <div class="tech-badges">${p.tech.map(tech => `<span class="badge">${tech}</span>`).join('')}</div>
      <div style="margin-top:0.8rem; display:flex; gap:0.7rem;">
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
      {name: "Python", value: 95},
      {name: "SQL", value: 89},
      {name: "PowerShell", value: 78},
      {name: "Web Scraping", value: 86},
    ]
  },
  {
    icon: "bar-chart-3",
    title: "Vizualizace",
    list: [
      {name:"Power BI", value: 93},
      {name:"DAX", value: 86},
      {name:"Dashboards", value: 92},
      {name:"Reporting", value: 89}
    ]
  },
  {
    icon: "settings",
    title: "Systémy",
    list: [
      {name:"SharePoint", value: 82},
      {name:"Power Automate", value: 84},
      {name:"M365", value: 86},
      {name:"Digitalizace", value: 89}
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
      setTimeout(() => { bar.style.width = val+"%"; },85);
    });
  }, 300);
}
