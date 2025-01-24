function cambiarBannerEnProductosSection() {  
  let cuadros = document.querySelectorAll('.productos__logos');
  let wrapper = document.querySelector('.products__wrapper')

  cuadros.forEach((element, index) => {      
    element.addEventListener('click', () => {
      let img = element.querySelector('img'); 
      let secciones = document.querySelectorAll('.products__background');
      wrapper.style.display = 'block';
    
      secciones.forEach((seccion, i) => {
        if (i === index) {
          // Quita la clase 'hidden' antes de aplicar fadeIn para evitar conflictos
          seccion.classList.remove('hidden');
          // Aplica el efecto de fadeIn
          $(seccion).fadeIn('fast', () => {
            seccion.classList.add('visible'); // Agrega 'visible' después del fadeIn
          });
        } else {
          // Oculta las demás secciones sin animación y asegura que estén ocultas
          $(seccion).stop(true, true).hide();
          seccion.classList.remove('visible');
          seccion.classList.add('hidden');
        }
      });
      
      // Elimina la clase 'productos__logos-active' de todos los cuadros y cambia las imágenes a blanco
      cuadros.forEach((el) => {
        el.classList.remove('productos__logos-active');
        el.style.backgroundColor = "";
        let imgEl = el.querySelector('img');
        if (imgEl) {
          
          // Cambia la imagen a su versión en blanco (dependiendo de su estado)
          switch (el) {
            case cuadros[0]:
              imgEl.src = imgEl.src.includes('img/logo/logosplendid.svg') 
                ? 'img/productos/Splendid-logo-2.png' 
                : 'img/productos/Splendid-logo-2.png';
              break;
            case cuadros[1]:
        
              imgEl.src = imgEl.src.includes('img/productos/Tropic-Star.png') 
                ? 'img/productos/tropic-star-blanco.png' 
                : 'img/productos/tropic-star-blanco.png';
              break;
            case cuadros[2]:
              imgEl.src = imgEl.src.includes('img/productos/logo-farms.png') 
                ? 'img/productos/logo-2-color-blanco.png' 
                : 'img/productos/logo-2-color-blanco.png';
              break;
            default:
              break;
          }
        }
      });

      // Añade la clase 'productos__logos-active' solo al elemento que fue clickeado
      element.classList.add('productos__logos-active');
      element.style.backgroundColor = "white";
      // Cambia la imagen del cuadro clickeado a su versión a color
      if (img) {
        switch (index) {
          case 0:
            img.src = img.src.includes('img/productos/Splendid-logo-2.png')
              ? 'img/logo/logosplendid.svg'
              : 'img/productos/Splendid-logo-2.png';
            break;
          case 1:
            img.src = img.src.includes('img/productos/tropic-star-blanco.png')
              ? 'img/productos/Tropic-Star.png'
              : 'img/productos/tropic-star-blanco.png';
            break;
          case 2:
            img.src = img.src.includes('img/productos/logo-2-color-blanco.png')
              ? 'img/productos/logo-farms.png'
              : 'img/productos/logo-2-color-blanco.png';
            break;
          default:
            break;
        }
      }
    });
  });
}

cambiarBannerEnProductosSection()

//!┌ ∘°Sección Products°∘ ─────────────────────────────────────────────┐!//
