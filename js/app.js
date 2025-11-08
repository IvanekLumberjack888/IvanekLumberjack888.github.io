// app.js for portfolio web

// Loader (hide after page loaded)
window.addEventListener('load',function(){
 document.getElementById('loading-screen').setAttribute('hidden','');
});

// Swiper slider
const swiper = new Swiper('.mySwiper', {
 loop: true,
 autoplay: {delay: 3650, disableOnInteraction:false},
 pagination: {el: '.swiper-pagination', clickable: true},
 speed: 800
});

// Typed hero name
const typed = new Typed('#typed-name', {
  strings: ['Ivo Doležal','Python | Data Engineer','Fabric | DP-700'],
  typeSpeed: 68,
  backSpeed: 45,
  loop: true
});

// Dark/Light theme
const toggle = document.getElementById('theme-toggle');
toggle.onclick = ()=>{
 document.body.classList.toggle('light');
 localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
}
window.addEventListener('DOMContentLoaded',()=>{
 if(localStorage.getItem('theme')==='light'){
   document.body.classList.add('light');
 }
});

// YouTube Shorts Modal
const videoBtns = document.querySelectorAll('.video-btn');
const modal = document.getElementById('video-modal');
const iframe = document.getElementById('youtube-video');
const closeBtn = document.querySelector('.close-btn');

videoBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const videoId = btn.getAttribute('data-youtube');
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
    modal.classList.remove('hidden');
  });
});
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  iframe.src = '';
});
modal.addEventListener('click', e => {
  if(e.target === modal){
    modal.classList.add('hidden');
    iframe.src = '';
  }
});
