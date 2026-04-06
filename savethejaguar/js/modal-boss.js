// Obtener el modal
let modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("btn-modal");
let btn__mango = document.getElementById("manguito");
let btn__circle = document.querySelector('.manguito__circle');



// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Función para eliminar la barra de desplazamiento y añadir padding
function disableScroll() {
  // Obtener el ancho de la barra de desplazamiento
  var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  
  // Desactivar la barra de desplazamiento
  document.body.style.overflow = 'hidden';

  // Añadir padding a la derecha del body para evitar el "salto" al quitar la scrollbar
  document.body.style.paddingRight = scrollbarWidth + 'px';
}

// Función para restaurar el comportamiento normal de la página
function enableScroll() {
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = '0px';
}

// Cuando el usuario haga clic en el botón, abre el modal
btn.onclick = function() {
  modal.style.display = "block";
  disableScroll();
}

btn__circle.onclick = function() {
  modal.style.display = "block";
  disableScroll();
}

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
  enableScroll();
}

// Cuando el usuario haga clic fuera del contenido del modal, lo cierra
window.onclick = function(event) {
  // Si el clic es en el fondo del modal (no en el contenido), cierra el modal
  if (event.target === modal) {
    modal.style.display = "none";
    enableScroll();
  }
}
//!┌ ∘°Modal 2°∘ ─────────────────────────────────────────────┐!//
let modal1 = document.getElementById("myModal1");
let btn1 = document.getElementById("manguito"); // Asocia el botón que abrirá el modal
let btn_cerrar = document.getElementsByClassName('modal__button');

btn_cerrar[0].onclick = function() {
  modal1.style.display = "none";
  enableScroll();
}

// Abre el modal
btn1.onclick = function() {
  modal1.style.display = "block";
  disableScroll();
}


// Cierra el modal cuando se hace clic fuera del contenido
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    enableScroll();
  }
}

// Evita que se cierre el modal si se hace clic en el contenido
modal1.querySelector('.modal-content1').onclick = function(event) {
  event.stopPropagation();
  // Aquí puedes agregar lógica si quieres hacer algo cuando se hace clic en el contenido
}
