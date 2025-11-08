// Swiper init
const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: { delay: 4200, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    900: { slidesPerView: 2 },
    1200: { slidesPerView: 3 }
  }
});

// Loading fade-out\window.addEventListener('load', ()=>{
  const l = document.getElementById('loading');
  l.style.opacity = '0';
  setTimeout(()=>l.remove(),420);
});

// YouTube modal
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');

document.querySelectorAll('.open-video').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const src = btn.dataset.youtube;
    if(!src) return;
    modalContent.innerHTML = `<iframe width="100%" height="100%" src="${src}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden','false');
  });
});

modal.addEventListener('click', (e)=>{
  if(e.target === modal){ modal.classList.remove('active'); modalContent.innerHTML = ''; modal.setAttribute('aria-hidden','true'); }
});

// Escape key closes modal
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    modal.classList.remove('active');
    modalContent.innerHTML = '';
  }
});
