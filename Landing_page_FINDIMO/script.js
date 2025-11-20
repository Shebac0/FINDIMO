// Formulario de contacto en CTA Final
(function(){
  const form = document.getElementById('ctaContactForm');
  const successEl = document.getElementById('cta-success');
  if (!form || !successEl) return;
  function validateField(input){
    const err = input.parentElement.querySelector('.error');
    if (err) err.textContent = '';
    input.classList.remove('invalid');
    const val = (input.value || '').trim();
    if (input.hasAttribute('required') && !val){
      if (err) err.textContent = 'Este campo es obligatorio';
      input.classList.add('invalid');
      return false;
    }
    if (input.type === 'email' && val){
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(val)){
        if (err) err.textContent = 'Introduce un correo válido';
        input.classList.add('invalid');
        return false;
      }
    }
    return true;
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = Array.from(form.querySelectorAll('input, textarea'));
    const ok = inputs.map(i => validateField(i)).every(Boolean);
    if (!ok) return;
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Enviando...'; }
    inputs.forEach(i => i.disabled = true);
    setTimeout(() => {
      form.style.display = 'none';
      successEl.style.display = 'block';
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Enviar'; }
      setTimeout(() => {
        // reset para nuevo envío
        form.style.display = '';
        successEl.style.display = 'none';
        inputs.forEach(i => { i.disabled = false; i.value = ''; i.classList.remove('invalid'); });
        form.querySelectorAll('.error').forEach(e => e.textContent = '');
      }, 2700);
    }, 900);
  });
  form.querySelectorAll('input').forEach(i => i.addEventListener('blur', () => validateField(i)));
})();
// Menu de navegacion movil
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');

const toggleMenu = () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
};
hamburger.addEventListener('click', toggleMenu);

// Sombra del encabezado al hacer scroll
const onScroll = () => {
  if (window.scrollY > 4) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Cerrar menu al navegar
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && nav.classList.contains('open')) toggleMenu();
});

// ===== Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Control de tabs para testimonios
const tabs = document.querySelectorAll('.tabs .tab');
const carousels = document.querySelectorAll('.carousel-container');
tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    // activate
    activateTab(tab);
  });
});

// Indicador movil y soporte de teclado para tabs
const tabContainer = document.querySelector('.tabs');
const indicator = tabContainer ? tabContainer.querySelector('.tab-indicator') : null;

function activateTab(tab){
  tabs.forEach(t=>{ t.classList.remove('is-active'); t.setAttribute('aria-selected','false'); });
  tab.classList.add('is-active'); tab.setAttribute('aria-selected','true');
  const targetSel = tab.dataset.target;
  carousels.forEach(c=> c.classList.toggle('is-visible', '#'+c.id === targetSel));

  // Mover indicador bajo el tab activo
  if (indicator){
    const rect = tab.getBoundingClientRect();
    const parentRect = tabContainer.getBoundingClientRect();
    const left = rect.left - parentRect.left + 6; // pequeno margen
    const width = rect.width - 12;
    indicator.style.left = `${left}px`;
    indicator.style.width = `${Math.max(36, width)}px`;
  }
}

// initialize indicator position on load
window.addEventListener('load', ()=>{
  const active = document.querySelector('.tabs .tab.is-active');
  if (active) activateTab(active);
});

tabs.forEach((tab, idx) => {
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { const next = tabs[(idx+1)%tabs.length]; next.focus(); activateTab(next); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { const prev = tabs[(idx-1+tabs.length)%tabs.length]; prev.focus(); activateTab(prev); e.preventDefault(); }
  });
});

// Control del carrusel
document.querySelectorAll('.carousel-container').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
});

// Resaltar link del menu cuando su seccion este visible
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

// Animar elementos al hacer scroll
(function(){
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;
  const obs = new IntersectionObserver((entries, ob) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        ob.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  revealEls.forEach(el => obs.observe(el));
})();

// Seguridad: asegurar que el contenedor del carrusel existe
document.querySelectorAll('.carousel-container').forEach(container => {
  const track = container.querySelector('.carousel-track');
  if (!track) return;
  // make container focusable for accessibility
  container.setAttribute('tabindex', '0');
});

// Efectos visuales, animaciones en secuencia, inclinacion de cards y parallax del hero
(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animar elementos en secuencia al aparecer
  const staggers = document.querySelectorAll('.stagger');
  if (staggers.length && !prefersReduced){
    const sObs = new IntersectionObserver((entries, ob) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          const children = Array.from(entry.target.children);
          children.forEach((ch, i) => ch.style.animationDelay = `${i * 80}ms`);
          entry.target.classList.add('revealed');
          ob.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    staggers.forEach(s => sObs.observe(s));
  }

  // Efecto 3D suave al pasar el mouse sobre las tarjetas
  if (!prefersReduced){
    document.querySelectorAll('.card').forEach(card => {
      const inner = card.querySelector('.card-inner') || card;
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const rx = (-y) * 6; // rotateX
        const ry = (x) * 8; // rotateY
        inner.style.transform = `translateZ(12px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        inner.style.boxShadow = '0 20px 40px rgba(2,6,23,.12)';
      });
      card.addEventListener('pointerleave', () => {
        inner.style.transform = '';
        inner.style.boxShadow = '';
      });
    });
  }

  // Efecto parallax en la imagen principal al hacer scroll
  const hero = document.querySelector('.hero');
  const heroImg = document.querySelector('.hero__media');
  if (hero && heroImg && !prefersReduced){
    window.addEventListener('scroll', () => {
      const rect = hero.getBoundingClientRect();
      const center = rect.top + rect.height/2 - window.innerHeight/2;
      const max = 40; // px
      const val = Math.max(-max, Math.min(max, center * -0.06));
      heroImg.style.transform = `translateY(${val}px)`;
    }, { passive: true });
  }
})();

// Lightbox para imagenes y efecto ripple en botones
(function(){
  const imgs = Array.from(document.querySelectorAll('.photo'));
  if (!imgs.length) return;

  imgs.forEach(img => { img.setAttribute('role','button'); img.setAttribute('tabindex','0'); });

  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');
  const lbClose = document.getElementById('lb-close');
  const allImgs = imgs.map(i => i.getAttribute('src'));

  let idx = 0;
  const open = (i) => {
    idx = i;
    const src = allImgs[idx];
    lbImg.src = src;
    // usar el texto alternativo de la imagen como pie, o vacio si no tiene
    const alt = imgs[idx].getAttribute('alt') || '';
    const captionEl = document.getElementById('lb-caption');
    captionEl.textContent = alt;
    lb.setAttribute('aria-hidden','false');
    lb.classList.add('open');
    document.body.classList.add('no-scroll');
    const lbContainer = document.querySelector('.lb');
    setTimeout(()=> lbContainer.classList.add('open'), 10);
    setTimeout(()=> lbClose.focus(), 80);
  };
  const close = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); };
  const prev = () => { idx = (idx - 1 + allImgs.length) % allImgs.length; open(idx); };
  const next = () => { idx = (idx + 1) % allImgs.length; open(idx); };

  imgs.forEach((img, i) => {
    const handler = (e) => { open(i); };
    img.addEventListener('click', handler);
    img.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
  });

  lbPrev.addEventListener('click', prev);
  lbNext.addEventListener('click', next);
  lbClose.addEventListener('click', () => { close(); document.body.classList.remove('no-scroll'); document.querySelector('.lb').classList.remove('open'); });

  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { close(); document.body.classList.remove('no-scroll'); document.querySelector('.lb').classList.remove('open'); } if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); });

  lb.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'opacity' && !lb.classList.contains('open')) document.body.classList.remove('no-scroll');
  });

  (function addSwipe(){
    let startX = 0; let dx = 0; let down = false;
    const imgEl = lbImg;
    imgEl.addEventListener('pointerdown', (ev) => { down = true; startX = ev.clientX; imgEl.setPointerCapture(ev.pointerId); });
    imgEl.addEventListener('pointermove', (ev) => { if (!down) return; dx = ev.clientX - startX; });
    imgEl.addEventListener('pointerup', (ev) => { down = false; if (Math.abs(dx) > 50){ if (dx > 0) prev(); else next(); } dx = 0; });
  })();

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const circle = document.createElement('span');
    circle.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size/2}px`;
    circle.style.top = `${e.clientY - rect.top - size/2}px`;
    btn.appendChild(circle);
    setTimeout(()=> circle.remove(), 600);
  });
})();

// Contact modal: abrir, validar y enviar (simulado)
(function(){
  // Select explicit open-contact buttons and any anchor that points to #contacto
  const openBtns = Array.from(document.querySelectorAll('.open-contact, a[href="#contacto"]'));
  const modal = document.getElementById('contactModal');
  if (!modal || !openBtns.length) return;
  const form = modal.querySelector('#contactForm');
  const successEl = modal.querySelector('.contact-success');
  const closeBtn = modal.querySelector('.contact-close');
  const cancelBtn = modal.querySelector('.contact-cancel');
  const firstInput = form ? form.querySelector('input, textarea') : null;
  let lastFocused = null;

  const openModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    lastFocused = document.activeElement;
    modal.setAttribute('aria-hidden','false');
    modal.classList.add('open');
    document.body.classList.add('no-scroll');
    setTimeout(()=> firstInput && firstInput.focus(), 80);
  };

  const resetForm = () => {
    if (!form) return;
    form.style.display = '';
    successEl.style.display = 'none';
    form.querySelectorAll('input,textarea').forEach(i => {
      i.disabled = false;
      i.classList.remove('invalid');
      // keep values? We'll clear to be friendly
      i.value = '';
      const err = i.parentElement.querySelector('.error');
      if (err) err.textContent = '';
    });
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('no-scroll');
    // after transition, reset and restore focus
    setTimeout(()=>{
      resetForm();
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }, 260);
  };

  openBtns.forEach(b => b.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  function validateField(input){
    const err = input.parentElement.querySelector('.error');
    if (err) err.textContent = '';
    input.classList.remove('invalid');
    const val = (input.value || '').trim();
    if (input.hasAttribute('required') && !val){
      if (err) err.textContent = 'Este campo es obligatorio';
      input.classList.add('invalid');
      return false;
    }
    if (input.type === 'email' && val){
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(val)){
        if (err) err.textContent = 'Introduce un correo válido';
        input.classList.add('invalid');
        return false;
      }
    }
    return true;
  }

  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = Array.from(form.querySelectorAll('input, textarea'));
      const ok = inputs.map(i => validateField(i)).every(Boolean);
      if (!ok) return;
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Enviando...'; }
      inputs.forEach(i => i.disabled = true);
      // simulamos envío
      setTimeout(() => {
        form.style.display = 'none';
        successEl.style.display = 'block';
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Enviar'; }
        // cerrar automáticamente
        setTimeout(closeModal, 2700);
      }, 900);
    });

    // validate on blur for better UX
    form.querySelectorAll('input').forEach(i => i.addEventListener('blur', () => validateField(i)));
  }

})();