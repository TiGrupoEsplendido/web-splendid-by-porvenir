function cargarCalendario() {
  const botones = document.querySelectorAll('.productos__boton');
  const div_contenedor = document.querySelector('.temporada__map');

  // Inicialmente, aseguramos que el contenedor esté oculto
  div_contenedor.style.display = 'none';

  const imagenes = [
    'img/productos/calendario/availability-bali-mango.png',
    'img/productos/calendario/availability-jaguar-mango.png',
    'img/productos/calendario/availability-keitt-kong-mango.png',
    'img/productos/calendario/availability-kent-mango.png',
    'img/productos/calendario/availability-honey-mango.png',
    'img/productos/calendario/availability-haden.png',
    'img/productos/calendario/availability-keitt-kong-mango.png',
    'img/productos/calendario/availability-tommy-mango.png',
  ];

  function mostrarImagen(index) {
    // Usamos fadeOut para desvanecer la imagen actual
    $(div_contenedor).fadeOut(500, function() {
      // Limpiar el contenido del contenedor
      div_contenedor.innerHTML = '';

      // Crear la nueva imagen
      const img = document.createElement('img');
      img.src = imagenes[index];
      img.alt = `Imagen ${index + 1}`;
      img.className = 'w-100';
      div_contenedor.appendChild(img);

      // Usar fadeIn para mostrar la nueva imagen
      $(div_contenedor).fadeIn(500); // 500ms para la animación
    });
  }

  botones.forEach((elemento, index) => {
    $(elemento).click(() => mostrarImagen(index));
  });
}

cargarCalendario();
