document.querySelector('#app').innerHTML = `
  <div class="stars" id="stars-container"></div>
  <div class="envelope-container" id="envelope-wrapper">
    <div class="envelope" id="envelope">
      <div class="envelope-flap"></div>
      <div class="envelope-front"></div>
      <div class="envelope-bottom"></div>
      <div class="wax-seal">L</div>
      
      <div class="letter">
        <div class="badge">Administradora de Empresas 💼✨</div>
        <h1 class="letter-title">Para Laura Herrera</h1>
        <p class="letter-content">
          Laura, el mundo de los negocios es gigante, pero tu talento, tu visión y tu capacidad de liderazgo lo son aún más. <br><br>
          Sigue brillando con esa energía única que te caracteriza. Eres una administradora increíble y una persona aún mejor. ¡Nunca dejes de soñar en grande!
        </p>
        <p class="letter-footer">Con mucha admiración y cariño.</p>
      </div>
    </div>
    <div class="envelope-text">Toca para abrir la magia 💌</div>
  </div>
  <div class="floating-elements" id="particles-container"></div>
`;

// Generate background stars
const starsContainer = document.getElementById('stars-container');
for (let i = 0; i < 150; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  const size = Math.random() * 2 + 1;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  
  star.style.animationDuration = (Math.random() * 4 + 2) + 's';
  star.style.animationDelay = (Math.random() * 5) + 's';
  
  starsContainer.appendChild(star);
}

// Handle envelope opening
const envelope = document.getElementById('envelope');
const wrapper = document.getElementById('envelope-wrapper');
const particlesContainer = document.getElementById('particles-container');

let isOpen = false;

wrapper.addEventListener('click', () => {
  if (!isOpen) {
    envelope.classList.add('open');
    wrapper.classList.add('open');
    createParticles();
    isOpen = true;
  }
});

const emojis = ['❤️', '✨', '💼', '🌟', '💖', '🎉'];

function createParticles() {
  // Fire particles over a few seconds
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Randomly select emoji
      particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      
      // Random size
      const size = Math.random() * 20 + 15;
      particle.style.fontSize = size + 'px';
      
      // Random horizontal start position
      particle.style.left = Math.random() * 100 + '%';
      
      // Random animation duration
      particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
      
      particlesContainer.appendChild(particle);
      
      // Cleanup
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 7000);
    }, i * 80); // Stagger particle creation
  }
}
