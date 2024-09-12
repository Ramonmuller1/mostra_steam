const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;



// Lista de imagens para o cacto
const cactoImages = [
  'url(img/proibido-fumar-logo-8AB957081F-seeklogo.com.png)',
  'url(img/dorflex.png)',
  'url(img/rivotril.png)'
];

// Função para escolher uma imagem aleatória
function randomizeCactoImage() {
  const randomIndex = Math.floor(Math.random() * cactoImages.length);
  cacto.style.backgroundImage = cactoImages[randomIndex];
}

// Evento para detectar salto
document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

// Função de pulo
function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      dino.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

// Intervalo que verifica colisão e score
setInterval(() => {
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 0 && cactoLeft < 130 && dinoBottom <= 30 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
    // Randomiza a imagem do cacto ao reiniciar o jogo
    randomizeCactoImage();
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);

// Randomiza a imagem do cacto ao iniciar o jogo
randomizeCactoImage();


