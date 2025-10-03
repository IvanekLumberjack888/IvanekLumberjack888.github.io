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

const projects = [
  {title:"Text Analyzer", description:"Pokročilý nástroj pro analýzu textových dat...", tech:["Python","Pandas","NLP"], github:"https://github.com/IvanekLumberjack888/text_analyzer", demo:"https://ivaneklumberjack888.github.io/text_analyzer/", icon:"code"},
  {title:"Bulls & Cows", description:"Interaktivní hra implementovaná v Pythonu...", tech:["Python","Algoritmy","Game Logic"], github:"https://github.com/IvanekLumberjack888/Bulls-and-Cows", demo:"https://ivaneklumberjack888.github.io/Bulls-and-Cows/", icon:"gamepad-2"},
  {title:"Election Scraper", description:"Web scraping nástroj pro sběr a analýzu...", tech:["Python","Web Scraping","Data Analysis"], github:"https://github.com/IvanekLumberjack888/Elections-Scraper", demo:"https://ivaneklumberjack888.github.io/Elections-Scraper/", icon:"globe"},
  {title:"Analýza HDP vs mzdy", description:"Komplexní SQL analýza ekonomických dat...", tech:["SQL","PostgreSQL","Data Analysis"], github:"https://github.com/IvanekLumberjack888/sql-projekt-engeto", demo:"https://ivaneklumberjack888.github.io/sql-projekt-engeto/", icon:"database"},
  {title:"PowerBI pro Engeto", description:"Interaktivní dashboard a vizualizace dat...", tech:["Power BI","DAX","Data Visualization"], github:"https://github.com/IvanekLumberjack888/PowerBI-for-Engeto", demo:"https://ivaneklumberjack888.github.io/PowerBI-for-Engeto/", icon:"bar-chart-3"},
];

const skillTiles = [
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
