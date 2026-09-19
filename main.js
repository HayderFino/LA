// Removed import

document.querySelector('#app').innerHTML = `
  <div class="stars" id="stars-container"></div>
  <div class="envelope-container" id="envelope-wrapper">
    <div class="envelope" id="envelope">
      <div class="envelope-text">Toca para abrir 💌</div>
      <div class="letter">
        <div class="badge">Administradora de Empresas 💼✨</div>
        <h1 class="letter-title">Para Laura Herrera</h1>
        <p class="letter-content">
          Laura, el mundo de los negocios es gigante, pero tu talento, tu visión y tu capacidad de liderazgo lo son aún más. <br><br>
          Sigue brillando con esa energía única que te caracteriza. Eres una administradora increíble y una persona aún mejor. ¡Nunca dejes de soñar en grande!
        </p>
        <p class="letter-footer">Con mucho cariño.</p>
      </div>
    </div>
  </div>
  <div id="hearts-container"></div>
`

// Generate background stars
const starsContainer = document.getElementById('stars-container');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  const size = Math.random() * 3 + 1;
  star.style.width = \`\${size}px\`;
  star.style.height = \`\${size}px\`;
  
  star.style.left = \`\${Math.random() * 100}%\`;
  star.style.top = \`\${Math.random() * 100}%\`;
  
  star.style.animationDuration = \`\${Math.random() * 3 + 2}s\`;
  star.style.animationDelay = \`\${Math.random() * 5}s\`;
  
  starsContainer.appendChild(star);
}

// Handle envelope opening
const envelope = document.getElementById('envelope');
const wrapper = document.getElementById('envelope-wrapper');
const heartsContainer = document.getElementById('hearts-container');

let isOpen = false;

wrapper.addEventListener('click', () => {
  if (!isOpen) {
    envelope.classList.add('open');
    createHearts();
    isOpen = true;
  }
});

function createHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      
      heart.style.left = \`\${Math.random() * 100}%\`;
      heart.style.animationDuration = \`\${Math.random() * 2 + 3}s\`;
      
      heartsContainer.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 150);
  }
}
