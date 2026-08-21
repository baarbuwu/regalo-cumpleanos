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
    
    seccion1.classList.add('transicion-suave');
    seccion2.classList.add('transicion-suave');

    torta.addEventListener('click', () => {
        audioFondo.play(); 
        btnMusica.innerHTML = '⏸'; 
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#ff69b4', '#c71585', '#ffffff']
        });
        seccion1.classList.add('oculto-animado');
        seccion2.classList.add('oculto-animado');
        seccion2.style.display = 'flex'; 
        setTimeout(() => {
            seccion1.style.display = 'none'; 
            seccion2.classList.remove('oculto-animado'); 
        }, 800); 
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

    // Agregamos la clase de animación a la carta
    seccion3.classList.add('transicion-suave');

    btnCarta.addEventListener('click', () => {

        seccion2.classList.add('oculto-animado');
        
        seccion3.classList.add('oculto-animado');
        seccion3.style.display = 'flex';

        btnVolver.style.display = 'block';

        setTimeout(() => {
            seccion2.style.display = 'none';
            seccion3.classList.remove('oculto-animado');
        }, 800);
    });

    sobre.addEventListener('click', () => {
        document.getElementById("env-flap").classList.add("open-flap");
        document.getElementById("env-letter").classList.add("pull-letter");
        document.getElementById("env-text").classList.add("show-text");
    });

// ==========================================
    // BOTÓN DE VOLVER (SOLO DE CARTA A FOTOS)
    // ==========================================
    btnVolver.addEventListener('click', () => {
        if (seccion3.style.display === 'flex') {
            seccion3.classList.add('oculto-animado');
            seccion2.classList.add('oculto-animado');
            seccion2.style.display = 'flex';
            
            setTimeout(() => {
                seccion3.style.display = 'none';
                seccion2.classList.remove('oculto-animado');
                
                // Ocultamos la flecha porque ya llegamos a las fotos
                btnVolver.style.display = 'none'; 
            }, 800);
        } 
    });

    btnMusica.addEventListener('click', () => {
        if (audioFondo.paused) {
            audioFondo.play(); 
            btnMusica.innerHTML = '⏸'; // Cambia a pausa
        } else {
            audioFondo.pause(); 
            btnMusica.innerHTML = '🎵'; // Cambia a play
        }
    });
}); 
