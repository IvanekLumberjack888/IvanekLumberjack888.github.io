// Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

// Typed.js animace pro jméno
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    strings: ['Ivo Doležal'],
    typeSpeed: 100,
    startDelay: 300,
    showCursor: true,
    cursorChar: '|',
    backSpeed: 50,
    loop: false
  };
  new Typed('#typed-name', options);
});

// Funkce pro dynamické načítání obsahu
function populateProjects() {
  // ...
}
function populateSkills() {
  // ...
}
function setupSmoothScrolling() {
  // ...
}
function setupAnimations() {
  // ...
}

// Iniciační volání
document.addEventListener('DOMContentLoaded', () => {
  populateProjects();
  populateSkills();
  setupSmoothScrolling();
  setupAnimations();
});
