// Esperamos a que la página cargue por completo
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // SELECCIONAMOS LOS ELEMENTOS PRINCIPALES
    // ==========================================
    const torta = document.querySelector('.cake-gif img'); 
    const seccion1 = document.querySelector('.parte-1');
    const seccion2 = document.getElementById('parte-2');
    const seccion3 = document.getElementById('parte3');
    
    const audioFondo = document.getElementById('musica-fondo');
    const btnMusica = document.getElementById('btn-musica');
    const btnVolver = document.getElementById('btn-volver');

    // ==========================================
    // PARTE 1: TRANSICIÓN DE LA TORTA
    // ==========================================
    torta.addEventListener('click', () => {
        seccion1.style.display = 'none';
        seccion2.style.display = 'flex'; 
        btnVolver.style.display = 'block'; // Aparece el botón de volver
        audioFondo.play(); // Arranca la música
        btnMusica.innerHTML = '⏸'; 
    });


    // ==========================================
    // PARTE 2: LÓGICA DEL CARRUSEL
    // ==========================================
    const fotos = [
        "./imagenes/imagen1.png", 
        "./imagenes/imagen2.png",
        "./imagenes/imagen3.png",
        "./imagenes/imagen4.png",
        "./imagenes/imagen5.png",
        "./imagenes/imagen6.png",
        "./imagenes/imagen7.png",
        "./imagenes/imagen8.png",
        "./imagenes/imagen9.png",
        "./imagenes/imagen10.png",
        "./imagenes/imagen11.png",
        "./imagenes/imagen12.png",
        "./imagenes/imagen13.png",
        "./imagenes/imagen14.png",
        "./imagenes/imagen15.png",
        "./imagenes/imagen16.png",
        "./imagenes/imagen17.png",
        "./imagenes/imagen18.png"
    ];

    let indiceActual = 0; 

    const imagenPolaroid = document.getElementById('polaroid-img');
    const btnSiguiente = document.getElementById('btn-next');
    const btnAnterior = document.getElementById('btn-prev');

    function actualizarFoto() {
        imagenPolaroid.src = fotos[indiceActual];
    }

    actualizarFoto();

    btnSiguiente.addEventListener('click', () => {
        indiceActual = indiceActual + 1; 
        if (indiceActual >= fotos.length) {
            indiceActual = 0;
        }
        actualizarFoto();
    });

    btnAnterior.addEventListener('click', () => {
        indiceActual = indiceActual - 1; 
        if (indiceActual < 0) {
            indiceActual = fotos.length - 1;
        }
        actualizarFoto();
    });

    // ==========================================
    // PARTE 3: LA CARTA FINAL
    // ==========================================
    const btnCarta = document.getElementById('btn-carta');
    const sobre = document.getElementById('envelope');

    btnCarta.addEventListener('click', () => {
        seccion2.style.display = 'none';
        seccion3.style.display = 'flex';
    });

    sobre.addEventListener('click', () => {
        document.getElementById("env-flap").classList.add("open-flap");
        document.getElementById("env-letter").classList.add("pull-letter");
        document.getElementById("env-text").classList.add("show-text");
    });

    // ==========================================
    // REPRODUCTOR DE MÚSICA
    // ==========================================
    btnMusica.addEventListener('click', () => {
        if (audioFondo.paused) {
            audioFondo.play(); 
            btnMusica.innerHTML = '⏸'; 
        } else {
            audioFondo.pause(); 
            btnMusica.innerHTML = '🎵'; 
        }
    }); // <-- Aquí estaba el error, faltaba esto.

    // ==========================================
    // BOTÓN DE VOLVER
    // ==========================================
    btnVolver.addEventListener('click', () => {
        // Si estamos en la carta, volvemos a las fotos
        if (seccion3.style.display === 'flex') {
            seccion3.style.display = 'none';
            seccion2.style.display = 'flex';
        } 
        // Si estamos en las fotos, volvemos a la torta
        else if (seccion2.style.display === 'flex') {
            seccion2.style.display = 'none';
            seccion1.style.display = 'flex'; 
            btnVolver.style.display = 'none'; // Ocultamos el botón
        }
    });

}); 