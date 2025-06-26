const chango = document.querySelector('.kong-skin');
const colores = document.querySelectorAll('.colors');

colores.forEach((e, id) => {
  e.setAttribute('no', id + 1);
  e.addEventListener('click', () => {
    let no_seleccionado = e.getAttribute('no');
    
    // Obtén el src original y luego reemplaza la parte de 'Kong-'
    let img = chango.getAttribute('src');
    img = img.replace(/Kong-\d*/, `Kong-${no_seleccionado}`);
    
    // Actualiza el atributo src de la imagen
    chango.setAttribute('src', img);
  });
});




console.log(img);

