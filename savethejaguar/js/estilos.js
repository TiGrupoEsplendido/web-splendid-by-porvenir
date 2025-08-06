// var lastScrollTop = 0;
// var topbar = document.querySelector(".barra-top"); // Reemplaza ".barra-top" con el selector real de tu topbar

// // Función para manejar el desplazamiento
// function handleScroll() {
//     var scrollTop = window.scrollY || document.documentElement.scrollTop;

//     // Verificar la dirección del desplazamiento
//     if (scrollTop > lastScrollTop) {
//         // Scrolling hacia abajo
//         topbar.style.transition = "opacity 0.5s";
//         topbar.style.opacity = "0";
//     } else {
//         // Scrolling hacia arriba
//         topbar.style.transition = "opacity 0.5s";
//         topbar.style.opacity = "1";
//     }

//     // Actualizar la última posición de desplazamiento
//     lastScrollTop = scrollTop;

//     // Configurar un temporizador para volver a mostrar la topbar después de 0.5 segundos
//     clearTimeout(window.scrollTimer);
//     window.scrollTimer = setTimeout(function () {
//         topbar.style.transition = "opacity 0.5s";
//         topbar.style.opacity = "1";
//     }, 500);
// }

// // Agregar un evento de desplazamiento
// window.addEventListener("scroll", handleScroll);
