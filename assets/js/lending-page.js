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

// Fecha objetivo de la cuenta regresiva
const targetDate = new Date('2024-01-01');

function updateCountdown() {
    console.log("actualizo")
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    // Convertir la diferencia de tiempo a días, horas y minutos
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / (1000));

    // Mostrar la cuenta regresiva en el elemento HTML
    //document.getElementById('countdown').textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
    var countdown = document.getElementsByClassName('countdown')
    for (var i = 0; i < countdown.length; i++) {
        countdown[i].textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
    }
    // Actualizar la cuenta regresiva cada segundo
    setTimeout(updateCountdown, 1000);
}

// Iniciar la cuenta regresiva
updateCountdown();

// Galeria
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-popup'));
        myModal.show();
    }
})

// Promociones index
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("promo-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-promos").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('promox-popup'));
        myModal.show();
    }
})

// Desactivar etiqueta a de index promociones
const enlaces = document.getElementsByClassName("miEnlace");

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener("click", function (event) {
        event.preventDefault();
    });
}
