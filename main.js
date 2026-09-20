let current = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
    let next = current + 1;
    if (next >= slides.length) next = 0;
    showSlide(next);
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    current = index;
}

// Función para abrir o cerrar la sección del jardín animado
function toggleFloresAnimadas(mostrar) {
    const seccion = document.getElementById("seccion-flores-animadas");
    if (mostrar) {
        seccion.classList.add("active");
    } else {
        seccion.classList.remove("active");
    }
}


onload = () =>{
    document.body.classList.remove("container");
};

// Creación automática de la lluvia de girasoles en el fondo principal
window.addEventListener("DOMContentLoaded", () => {
    const fondo = document.getElementById("fondo");
    if (fondo) {
        for (let i = 0; i < 25; i++) {
            let flor = document.createElement("img");
            flor.src = "https://www.pngmart.com/files/4/Sunflower-PNG-HD.png";
            flor.className = "girasol";
            flor.style.left = Math.random() * 100 + "vw";
            flor.style.animationDuration = (5 + Math.random() * 5) + "s";
            flor.style.width = (25 + Math.random() * 35) + "px";
            fondo.appendChild(flor);
        }
    }
});