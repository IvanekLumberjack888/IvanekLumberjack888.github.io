document.addEventListener('DOMContentLoaded', () => {
  const enBtn = document.getElementById('enBtn');
  const czBtn = document.getElementById('czBtn');
  enBtn.addEventListener('click', () => {
    enBtn.classList.add('active');
    czBtn.classList.remove('active');
  });
  czBtn.addEventListener('click', () => {
    czBtn.classList.add('active');
    enBtn.classList.remove('active');
  });

  const menuLinks = document.querySelectorAll('.menu-links a');
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      document.querySelector(link.getAttribute('href'))
              .scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
});
