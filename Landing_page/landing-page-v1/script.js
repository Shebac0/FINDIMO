let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})// ===== Menú móvil
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

const toggleMenu = () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
};
hamburger.addEventListener('click', toggleMenu);

// ===== Header shadow on scroll
const onScroll = () => {
  if (window.scrollY > 4) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Cerrar menú al navegar
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && nav.classList.contains('open')) toggleMenu();
});

// ===== Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Tabs Estudiantes/Arrendadores
const tabs = document.querySelectorAll('.tabs .tab');
const carousels = document.querySelectorAll('.carousel-container');
tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    tabs.forEach(t=>{ t.classList.remove('is-active'); t.setAttribute('aria-selected','false'); });
    tab.classList.add('is-active'); tab.setAttribute('aria-selected','true');
    const targetSel = tab.dataset.target;
    carousels.forEach(c=> c.classList.toggle('is-visible', '#'+c.id === targetSel));
  });
});

// ===== Carrusel: pausar animación con controles
document.querySelectorAll('.carousel-container').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  const pauseAnimation = () => { track.style.animationPlayState = 'paused'; };
  const resumeAnimation = () => { track.style.animationPlayState = 'running'; };
  [prev, next].forEach(ctrl => {
    ctrl.addEventListener('mouseenter', pauseAnimation);
    ctrl.addEventListener('mouseleave', resumeAnimation);
    ctrl.addEventListener('focus', pauseAnimation);
    ctrl.addEventListener('blur', resumeAnimation);
  });
});

// ===== Scrollspy - resalta link activo según sección visible
const navLinks = Array.from(document.querySelectorAll('#nav a[href^="#"]'))
  .filter(a => !a.classList.contains('btn'));
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const setActive = (id) => {
  navLinks.forEach(a => {
    const match = a.getAttribute('href') === `#${id}`;
    a.classList.toggle('active', match);
  });
};

const io = new IntersectionObserver((entries) => {
  const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) setActive(visible.target.id);
}, {
  rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--headerH'))+10}px 0px -40% 0px`,
  threshold: [0.2, 0.4, 0.6, 0.8]
});

sections.forEach(sec => io.observe(sec));

// Reaplicar offset si hay hash al cargar
window.addEventListener('load', () => {
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) el.scrollIntoView();
  }
});