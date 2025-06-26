// const menu = document.querySelector('.menu');
// menu.addEventListener('click',  animateBars);

const barra1 = document.querySelector('.menu__linea-1');
const barra2 = document.querySelector('.menu__linea-2');
const barra3 = document.querySelector('.menu__linea-3');

function animateBars() {  
  barra1.classList.toggle('active-menu__linea-1');
  barra2.classList.toggle('active-menu__linea-2');
  barra3.classList.toggle('active-menu__linea-3');
}

//!┌───────────────────────────────────────────── ∘°Navbar°∘ ─────────────────────────────────────────────┐!//

const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
let isScrolling;
let timer = null;

document.addEventListener('DOMContentLoaded', ()=>{
  if (window.scrollY === 0) {
    // Desaparecer la navbar si el scroll está en la parte superior
    navbar.classList.add('hidden');
  } else if (window.scrollY > lastScrollY) {
    // Ocultar la navbar cuando se hace scroll hacia abajo
    navbar.classList.add('hidden');
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
    navbar.classList.add('hidden');
  } else if (window.scrollY > lastScrollY) {
    // Ocultar la navbar cuando se hace scroll hacia abajo
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

