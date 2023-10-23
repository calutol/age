// Placeholder
function miFuncion() {
    // Código que deseas ejecutar una vez que la página se haya cargado completamente
    $(".placeholder").removeClass('placeholder')
    $(".color-loader").removeClass('color-loader')
    $(".bg-loader").removeClass('bg-loader')
    $(".border-loader").removeClass('border-loader')
}

function irArriba(pxPantalla) {
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var buttonUp = document.getElementById('buttonUp');
        if (scroll > pxPantalla) {
            buttonUp.style.right = 0 + "px";
        } else {
            buttonUp.style.right = -100 + "px";
        }
    })
}
irArriba(2300); 