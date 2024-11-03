const mouse = document.querySelector("#mouse");
window.addEventListener("mousemove", function (e) {
    var posX = e.clientX;
    var posY = e.clientY;

    mouse.style.left = posX + "px";
    mouse.style.top = posY + "px";

});


const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
    contador++;
    if (contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 550}px)`;
}

function slider2() {
    contador++;
    if (contador > imagens.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 350}px)`;
}

const tamanho = window.innerWidth;
if (box != null && imagens != null){
    if (tamanho > 615) {
        setInterval(slider, 2000);
    } else {
        setInterval(slider2, 2000);
    }
}