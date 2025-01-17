var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

  document.getElementById("hamburguesa").addEventListener("click", function () {
    const offCanva = document.getElementById("offCanva");
    const body = document.body;
    
    // Alterna la clase del off-canvas
    offCanva.classList.toggle("off-canva--active");
    
    // Bloquear o desbloquear el scroll según el estado del off-canvas
    if (offCanva.classList.contains("off-canva--active")) {
      body.classList.remove("overflow-hidden");  // Desbloquea el scroll
    } else {
      body.classList.add("overflow-hidden");  // Bloquea el scroll
    }
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Animación suave para que se vea el desplazamiento
    });
  });
  