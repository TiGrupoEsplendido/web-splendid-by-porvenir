document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    if (window.innerWidth >= 1200) {
      const scrollPosition = window.scrollY;
      const mango = document.querySelector('#mango');

      // Calcula la posición en X y Y en función del scroll
      let translateX, translateY;

      if (scrollPosition < 400) {
        translateX = (scrollPosition / 400) * 400; // Se mueve hasta 400px en X
        translateY = (scrollPosition / 400) * 550; // Se mueve hasta 600px en Y
      } else {
        translateX = 400; // Posición final en X
        translateY = 550; // Posición final en Y
      }

      // Aplica las transformaciones al elemento
      mango.style.transform = `translate(${translateX}px, ${translateY}px)`;  
    }
  });
});