const translations = {
  cz: {...},
  en: {...}
};

function setLang(lang) {
  for (const key in translations[lang]) {
    if (key === "projects_list") {
      const el = document.getElementById("projects_list");
      if (el) {
        el.innerHTML = "";
        translations[lang][key].forEach(txt => {
          el.innerHTML += `<h3><a href="#">${txt}</a></h3>`;
        });
      }
    } else if (key === "skills_text") {
      const s = document.getElementById(key);
      if (s) s.innerHTML = translations[lang][key];
    } else if (document.getElementById(key)) {
      document.getElementById(key).textContent = translations[lang][key];
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
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
