const translations = {
  cz: {
    menu_home: "Domů",
    menu_skills: "Dovednosti",
    menu_projects: "Projekty",
    menu_experience: "Zkušenosti",
    menu_contact: "Kontakt",
    title_name: "Ivo Doležal",
    title_sub: "Data Engineer | Systémový Inovátor",
    section_about: "O mně",
    about_text:
      "Občas vidím struktury a vzorce, které ostatní nevidí. Mám dar pronikat do skrytých systémů a nacházet řešení tam, kde ho jiní nevidí. Jak čtete v datech vy? Já čtu mezi řádky. Strašně rád se vrtám v datech a hledám ty skryté poklady, které tam někdo zanechal.",
    skills_h2: "Dovednosti",
    skills_text:
      "<strong>Data Engineering &amp; Architektura</strong><br>ETL/ELT Pipelines, Data Warehousing, Python &amp; SQL<br><strong>Systémová Integrace</strong><br>M365 Ekosystém, Power Platform, Power Automate<br><strong>Analytické Nástroje</strong><br>Power BI &amp; DAX, GitHub Copilot, Excel Advanced",
    projects_h2: "Projekty",
    projects_list: [
      `<h3><a href="https://github.com/IvanekLumberjack888/text_analyzer" target="_blank">Text Analyzer</a> | <a href="https://ivaneklumberjack888.github.io/text_analyzer/" target="_blank">Prezentace</a></h3>`,
      `<h3><a href="https://github.com/IvanekLumberjack888/Bulls-and-Cows" target="_blank">Bulls & Cows</a> | <a href="https://ivaneklumberjack888.github.io/Bulls-and-Cows/" target="_blank">Prezentace</a></h3>`,
      `<h3><a href="https://github.com/IvanekLumberjack888/Elections-Scraper" target="_blank">Election Scraper</a> | <a href="https://ivaneklumberjack888.github.io/Elections-Scraper/" target="_blank">Prezentace</a></h3>`,
      `<h3><a href="https://github.com/IvanekLumberjack888/sql-projekt-engeto" target="_blank">Analýza HDP vs mzdy (2006–2018)</a> | <a href="https://ivaneklumberjack888.github.io/sql-projekt-engeto/" target="_blank">Prezentace</a></h3>`,
      `<h3><a href="https://github.com/IvanekLumberjack888/PowerBI-for-Engeto" target="_blank">PowerBI pro Engeto</a> | <a href="https://ivaneklumberjack888.github.io/PowerBI-for-Engeto/" target="_blank">Prezentace</a></h3>`
    ],
    exp_h2: "Zkušenosti",
    exp_ai: "Implementace AI-powered řešení v Microsoft PowerBI",
    exp_ai_txt: "Povídání",
    exp_auto: "Automatizace procesů pomocí GitHub Copilot",
    exp_auto_txt: "Povídání",
    exp_digit: "Digitalizace",
    exp_digit_txt: "Povídání",
    contact_h2: "Kontakt",
    contact_mail: "ivousd@gmail.com"
  },
  en: {
    menu_home: "Home",
    menu_skills: "Skills",
    menu_projects: "Projects",
    menu_experience: "Experience",
    menu_contact: "Contact",
    title_name: "Ivo Doležal",
    title_sub: "Data Engineer | Systems Innovator",
    section_about: "About Me",
    about_text:
      "Sometimes I see structures and patterns that others don't notice. I have a talent for uncovering hidden systems and finding solutions where others cannot. How do you read data? I read between the lines. I love digging into data and looking for hidden treasures someone left there.",
    skills_h2: "Skills",
    skills_text:
      "<strong>Data Engineering & Architecture</strong><br>ETL/ELT Pipelines, Data Warehousing, Python & SQL<br><strong>System Integration</strong><br>M365 Ecosystem, Power Platform, Power Automate<br><strong>Analytical Tools</strong><br>Power BI & DAX, GitHub Copilot, Excel Advanced",
    projects_h2: "Projects",
    projects_list: [
      `<h3><a href="https://github.com/IvanekLumberjack888/text_analyzer" target="_blank">Text Analyzer</a> | <a href="https://ivaneklumberjack888.github.io/text_analyzer/" target="_blank">Demo</a></h3>`,
      `<h3><a href="https://github.com/IvanekLumberjack888/Bulls-and-Cows" target="_blank">Bulls & Cows</a> | <a href="https://ivaneklumberjack888.github.io/Bulls-and-Cows/" target="_blank">Demo</a></h3>`,
      `<h3><a href="https://github.com/IvanekLumberjack888/Elections-Scraper" target="_blank">Election Scraper</a> | <a href="https://ivaneklumberjack888.github.io/Elections-Scraper/" target="_blank">Demo</a></h3>`,
      `<h3><a href="https://github.com/IvanekLumberjack888/sql-projekt-engeto" target="_blank">Analysis GDP vs Wages (2006–2018)</a> | <a href="https://ivaneklumberjack888.github.io/sql-projekt-engeto/" target="_blank">Demo</a></h3>`,
      `<h3><a href="https://github.com/IvanekLumberjack888/PowerBI-for-Engeto" target="_blank">PowerBI for Engeto</a> | <a href="https://ivaneklumberjack888.github.io/PowerBI-for-Engeto/" target="_blank">Demo</a></h3>`
    ],
    exp_h2: "Experience",
    exp_ai: "AI-powered solutions in Microsoft PowerBI",
    exp_ai_txt: "Story",
    exp_auto: "Process Automation with GitHub Copilot",
    exp_auto_txt: "Story",
    exp_digit: "Digitalization",
    exp_digit_txt: "Story",
    contact_h2: "Contact",
    contact_mail: "ivousd@gmail.com"
  }
};

function setLang(lang) {
  for (const key in translations[lang]) {
    if (key === "projects_list") {
      const el = document.getElementById("projects_list");
      if (el) {
        el.innerHTML = "";
        translations[lang][key].forEach((txt) => {
          el.innerHTML += txt;
        });
      }
    } else if (key === "skills_text") {
      const s = document.getElementById(key);
      if (s) s.innerHTML = translations[lang][key];
    } else {
      const e = document.getElementById(key);
      if (e) e.textContent = translations[lang][key];
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("enBtn").onclick = function () {
    setLang("en");
    this.classList.add("active");
    document.getElementById("czBtn").classList.remove("active");
  };
  document.getElementById("czBtn").onclick = function () {
    setLang("cz");
    this.classList.add("active");
    document.getElementById("enBtn").classList.remove("active");
  };
});
