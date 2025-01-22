// Inicializa Swiper con configuración básica
const swiper = new Swiper('.swiper1', {
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
    el: '.swiper1 .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper1 .swiper-button-next',
    prevEl: '.swiper1 .swiper-button-prev',
  },
});


//!┌ ∘°Segundo Swiper°∘ ─────────────────────────────────────────────┐!//

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 500,
  // El resto de tu configuración
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
});

//!┌ ∘°Swiper BLOG°∘ ─────────────────────────────────────────────┐!//
const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 500,
  centeredSlides: true,
  // El resto de tu configuración
  pagination: {
    el: '.swiper3 .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper3 .swiper-button-next',
    prevEl: '.swiper3 .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }
});

//!┌ ∘°Swiper Certificado°∘ ─────────────────────────────────────────────┐!//
const swiper4 = new Swiper('.swiper4', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 1800,
  },
  navigation: {
    nextEl: '.swiper4 .swiper-button-next',
    prevEl: '.swiper4 .swiper-button-prev',
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true, // Habilita el desvanecimiento cruzado entre diapositivas
  },
});