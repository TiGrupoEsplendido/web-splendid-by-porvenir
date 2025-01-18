// Inicializa Swiper con configuración básica
const swiper = new Swiper('.swiper', {
  // Configuración por defecto (móvil primero)
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 10000,
  },
  // Configuraciones responsive
  breakpoints: {
    // >= 576px (SM)
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // >= 768px (MD)
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // >= 992px (LG)
    992: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
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
