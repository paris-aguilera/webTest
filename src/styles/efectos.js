// /styles/efectos.js

// 💡 SCRIPT DE INTERSECTION OBSERVER REUTILIZABLE
document.addEventListener('DOMContentLoaded', () => {
    // Configuración para forzar el scroll (sigue funcionando bien)
    const observerOptions = {
        root: null, 
        // El elemento debe estar 100px DENTRO del viewport para dispararse
        rootMargin: '0px 0px -100px 0px', 
        threshold: 0.05 // 5% del elemento debe ser visible
    };

    // Selecciona todos los elementos que tienen las clases de efectos
    const sectionsToAnimate = document.querySelectorAll('.entradaDesdeIzquierda-style, .entradaDesdeDerecha-style');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Entra: Se vuelve visible
                entry.target.classList.add('is-visible');
                entry.target.classList.remove('is-hidden'); 
            } else {
                // Sale: Se vuelve invisible (vuelve al estado inicial de 'entradaDesde...')
                entry.target.classList.remove('is-visible');
                entry.target.classList.add('is-hidden'); 
            }
        });
    }, observerOptions);

    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});