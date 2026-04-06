document.addEventListener('DOMContentLoaded', function () {


    escalaImagenesGaleria();
});
function escalaImagenesGaleria() {
    let imagen_seleccionada = document.getElementsByClassName('tns-slide-active')

    console.log(imagen_seleccionada);

    imagen_seleccionada.forEach(function (e) {
        console.log(e);
    });
    // imagen_seleccionada.addEventListener('click', function () {
    //     console.log('Me clickeaste pedrito');
    // });
}
