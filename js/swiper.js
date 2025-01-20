// Inicializa Swiper con configuración básica
const swiper = new Swiper('.swiper', {
  // Configuración por defecto (móvil primero)
  effect: "creative",
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 10000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  // El resto de tu configuración
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
