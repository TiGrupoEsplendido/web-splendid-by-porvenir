function cambiarBannerEnProductosSection() {  
  let cuadros = document.querySelectorAll('.productos__logos');

  cuadros.forEach((element, index) => {      
    element.addEventListener('click', () => {
      let img = element.querySelector('img'); 

      // Elimina la clase 'productos__logos-active' de todos los cuadros y cambia las imágenes a blanco
      cuadros.forEach((el) => {
        el.classList.remove('productos__logos-active');
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

      let banner__r = document.getElementById('banner__r');
      // Cambia la imagen del cuadro clickeado a su versión a color
      if (img) {
        switch (index) {
          case 0:
            img.src = img.src.includes('img/productos/Splendid-logo-2.png')
              ? 'img/logo/logosplendid.svg'
              : 'img/productos/Splendid-logo-2.png';

              banner__r.src = 'img/productos/products-banner.jpg'
            break;
          case 1:
            img.src = img.src.includes('img/productos/tropic-star-blanco.png')
              ? 'img/productos/Tropic-Star.png'
              : 'img/productos/tropic-star-blanco.png';

              banner__r.src = 'img/productos/banner-tropic-star.jpg'
            break;
          case 2:
            img.src = img.src.includes('img/productos/logo-2-color-blanco.png')
              ? 'img/productos/logo-farms.png'
              : 'img/productos/logo-2-color-blanco.png';

              banner__r.src = 'img/productos/banner-splendid-farms.jpg';
            break;
          default:
            break;
        }
      }
    });
  });
}

cambiarBannerEnProductosSection()


function prevenirArrastre(idContenedor) {
  // Obtener el contenedor por su ID
  const contenedor = document.getElementById(idContenedor);
  
  if (contenedor) {
      // Prevenir el arrastre en el contenedor
      contenedor.addEventListener('dragstart', (e) => {
          e.preventDefault();
      });
      
      // Seleccionar todas las imágenes dentro del contenedor
      const imagenes = contenedor.getElementsByTagName('img');
      
      // Prevenir el arrastre en cada imagen
      Array.from(imagenes).forEach(img => {
          img.draggable = false;
          img.addEventListener('dragstart', (e) => {
              e.preventDefault();
          });
      });
  }
}

prevenirArrastre(productosSection);