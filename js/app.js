// Variables will be loaded globally from content.js

document.addEventListener('DOMContentLoaded', () => {
    initContent();
    initScrollAnimations();
    initMusicPlayer();
});

function initMusicPlayer() {
    const btnMusic = document.getElementById('btn-music');
    const bgMusic = document.getElementById('bg-music');
    
    if (!btnMusic || !bgMusic) return;

    let isPlaying = false;

    btnMusic.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            btnMusic.classList.remove('playing');
            btnMusic.textContent = '🎵';
        } else {
            bgMusic.play().catch(e => console.log("Audio play failed:", e));
            btnMusic.classList.add('playing');
            btnMusic.textContent = '⏸️';
        }
        isPlaying = !isPlaying;
    });
}

function initContent() {
    // 1. WhatsApp Button
    const btnWhatsApp = document.getElementById('btn-whatsapp');
    const text = encodeURIComponent(CONFIG.mensajeWhatsapp);
    btnWhatsApp.href = `https://wa.me/${CONFIG.whatsapp}?text=${text}`;

    // 2. Phrases
    const phrasesContainer = document.getElementById('phrases-container');
    FRASES.forEach(frase => {
        const card = document.createElement('div');
        card.className = 'phrase-card reveal fade-up';
        card.textContent = frase;
        phrasesContainer.appendChild(card);
    });



    // 4. Final Letter
    const letterContent = document.getElementById('letter-content');
    CARTA_FINAL.parrafos.forEach(pText => {
        const p = document.createElement('p');
        p.textContent = pText;
        letterContent.appendChild(p);
    });
    
    document.getElementById('letter-signature').textContent = CARTA_FINAL.firma;
}

function initScrollAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}
