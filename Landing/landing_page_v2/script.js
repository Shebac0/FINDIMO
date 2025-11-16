// Tabs del carrusel de testimonios (Estudiantes / Arrendadores)
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

  // Mostrar por defecto el carrusel marcado como activo
  const activeTab = document.querySelector(".tabs .tab.is-active");
  if (activeTab) {
    showCarousel(activeTab.dataset.target);
  }
});