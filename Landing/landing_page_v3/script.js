// Tabs del carrusel de testimonios
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs .tab");
  const carousels = document.querySelectorAll(".carousel-container");

  if (!tabs.length || !carousels.length) return;

  function showCarousel(targetSelector) {
    carousels.forEach((c) => {
      const isMatch = `#${c.id}` === targetSelector;
      c.classList.toggle("is-visible", isMatch);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target;

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });

      showCarousel(target);
    });
  });

  // Mostrar por defecto el carrusel activo
  const activeTab = document.querySelector(".tabs .tab.is-active");
  if (activeTab) {
    showCarousel(activeTab.dataset.target);
  }

  // Animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Observar todos los elementos con clase reveal
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }
});