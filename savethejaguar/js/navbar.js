const navbar = document.querySelector('.header__wrapper');
let lastScrollY = window.scrollY;
let isScrolling;
let timer = null;

document.addEventListener('DOMContentLoaded', ()=>{
  if (window.scrollY === 0) {
    // Desaparecer la navbar si el scroll está en la parte superior
    navbar.classList.add('bg-invisible');
  } else if (window.scrollY > lastScrollY) {
    // Ocultar la navbar cuando se hace scroll hacia abajo
    navbar.classList.add('hidden');
    navbar.classList.remove('bg-invisible');
  } else {
    // Mostrar la navbar cuando se hace scroll hacia arriba
    navbar.classList.remove('hidden');
  }
});

window.addEventListener('scroll', () => {
  // Limpiar el temporizador cada vez que el usuario empieza a desplazarse
  clearTimeout(isScrolling);
  
  if (window.scrollY === 0) {
    // Desaparecer la navbar si el scroll está en la parte superior
    // navbar.classList.add('hidden');
    navbar.classList.add('bg-invisible');
  } else if (window.scrollY > lastScrollY) {
    // Ocultar la navbar cuando se hace scroll hacia abajo
    navbar.classList.remove('bg-invisible');
    navbar.classList.add('hidden');
  } else {
    // Mostrar la navbar cuando se hace scroll hacia arriba
    navbar.classList.remove('hidden');
  }

  // Actualizar la última posición del scroll
  lastScrollY = window.scrollY;

  // Configurar el temporizador para mostrar la navbar cuando el scroll se detiene
  isScrolling = setTimeout(() => {
    if (window.scrollY > 0) {
      navbar.classList.remove('hidden');
    }
  }, 150); // 150ms después de detenerse el scroll
});