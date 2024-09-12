const modalBackground = document.getElementById('modalBackground');
const modalBackground2 = document.getElementById('modalBackground2');
const modalBackground3 = document.querySelector('#modalBackground3');
const modalBackground4 = document.querySelector('#modalBackground4');
const modalBackground5 = document.querySelector('#modalBackground5');
const modalBackground6 = document.querySelector('#modalBackground6');
const modalBackground7 = document.querySelector('#modalBackground7');
const modalBackgroundCocaina2 = document.querySelector(".modal-content-cocaina");
const modalBackgroundVape = document.querySelector(".modal-content-vape");
const modalBackgroundMaconha = document.querySelector(".modal-content-maconha");
const modalBackgroundHeroina = document.querySelector(".modal-content-heroina");
const saibaMaisBtn = document.querySelector('.cocainaButtonSM');
const saibaMaisBtn2 = document.querySelector(".vapeButtonSM");
const saibaMaisBtn3 = document.querySelector('.maconhaButtonSM');
const saibaMaisBtn4 = document.querySelector('.heroinaButtonSM');
const closeModal = document.querySelector('#closeModal');
const closeModal1 = document.querySelector('#closeModal1');
const closeModal2 = document.querySelector('#closeModal2');
const closeModal3 = document.querySelector('#closeModal3');
const input = document.querySelector('#search');
const modalBackgroundJumpScare = document.querySelector('.modal-content-jumpscare');
const modalBackgroundbobbymarley = document.querySelector('.modal-content-bobbymarley');
const modalBackgroundmm = document.querySelector('.modal-content-mm');
const modalBackgroundcc = document.querySelector('.modal-content-cc');
const modalBackgroundPendrive = document.querySelector('.modal-content-Pendrive');
const modalBackgroundSukuna = document.querySelector('.modal-content-sukuna');
let contado = 15690;
const tempoUp = 2000;

function updateContador() {
    contado++;
    document.querySelector("#contador").innerText = contado;
}

function jumpscare() {
  const searchValue = input.value.trim().toLowerCase();
  if (searchValue === "1987") {
    const audio = new Audio("audios/Jumpscaregoldenfreddysunfnafone_[cut_15sec].mp3");
    audio.play();
    modalBackground2.style.display = "flex";
    modalBackgroundJumpScare.style.display = 'block';
  } else {
    modalBackground2.style.display = "none";
    modalBackgroundJumpScare.style.display = 'none';
  }
}

function maconha() {
  const searchValue = input.value.trim().toLowerCase();
  if (searchValue === "maconha") {
    const audio = new Audio("audios/BobMarley-IsThisLove(Official Music Video)_[cut_224sec].mp3");
    audio.play();
    modalBackground3.style.display = "flex";
    modalBackgroundbobbymarley.style.display = 'block';
  } else {
    modalBackground3.style.display = "none";
    modalBackgroundbobbymarley.style.display = 'none';
  }
}

function vape() {
  const searchValue = input.value.trim().toLowerCase();
  if (searchValue === "vape") {
    modalBackground6.style.display = "flex";
    modalBackgroundPendrive.style.display = 'block';
  } else {
    modalBackground6.style.display = "none";
    modalBackgroundPendrive.style.display = 'none';
  }
}

function heroina() {
  const searchValue = input.value.trim().toLowerCase();
  if (searchValue === "heroina") {
    const audio = new Audio("audios/Sia-Unstoppable(OfficialVideo-LivefromtheNostalgicForThePresent Tour)_[cut_210sec].mp3");
    audio.play();
    modalBackground4.style.display = "flex";
    modalBackgroundmm.style.display = 'block';
  } else {
    modalBackground4.style.display = "none";
    modalBackgroundmm.style.display = 'none';
  }
}

function cocaina() {
  const searchValue = input.value.trim().toLowerCase();
  if (searchValue === "cocaina") {
    const audio = new Audio("audios/Coca-Cola Brasil _ Escolhas_[cut_30sec].mp3");
    audio.play();
    modalBackground5.style.display = "flex";
    modalBackgroundcc.style.display = 'block';
  } else {
    modalBackground5.style.display = "none";
    modalBackgroundcc.style.display = 'none';
  }
}

function sukuna() {
  const searchValue = input.value.trim().toLowerCase();
  if (searchValue === "sukuna") {
    const audio = new Audio("audios/COMERCIALAMOEBAVINTAGE_[cut_30sec].mp3");
    audio.play();
    modalBackground7.style.display = "flex";
    modalBackgroundSukuna.style.display = 'block';
  } else {
    modalBackground7.style.display = "none";
    modalBackgroundSukuna.style.display = 'none';
  }
}

document.querySelector(".imgSearch").addEventListener("click", function() {
  jumpscare();
  maconha();
  heroina();
  vape();
  cocaina();
  sukuna();
});

updateContador();

setInterval(updateContador, tempoUp);

closeModal.addEventListener('click', function() {
  modalBackground.style.display = 'none'; // Esconde o modal
});

closeModal1.addEventListener('click', function() {
  modalBackground.style.display = 'none'; // Esconde o modal
});

closeModal2.addEventListener('click', function() {
  modalBackground.style.display = 'none'; // Esconde o modal
});

closeModal3.addEventListener('click', function() {
  modalBackground.style.display = 'none'; // Esconde o modal
});

saibaMaisBtn.addEventListener('click', function() {
    modalBackground.style.display = 'flex';
    modalBackgroundCocaina2.style.display = 'block';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
});

modalBackground.addEventListener('click', function(event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = 'none';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundCocaina2.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
  }
});


saibaMaisBtn2.addEventListener('click', function() {
    modalBackground.style.display = 'flex';
    modalBackgroundVape.style.display = 'block';
    modalBackgroundCocaina2.style.display = 'none';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
});

modalBackground.addEventListener('click', function(event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundCocaina2.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
  }
});

saibaMaisBtn3.addEventListener('click', function() {
    modalBackground.style.display = 'flex';
    modalBackgroundMaconha.style.display = 'block';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundCocaina2.style.display = 'none';
});

modalBackground.addEventListener('click', function(event) {
  if (event.target === modalBackground) {
    modalBackground.style.display = 'none';
    modalBackgroundMaconha.style.display = 'none';
    modalBackgroundHeroina.style.display = 'none';
    modalBackgroundVape.style.display = 'none';
    modalBackgroundCocaina2.style.display = 'none';
  }
});

saibaMaisBtn4.addEventListener('click', function() {
  modalBackground.style.display = 'flex';
  modalBackgroundHeroina.style.display = 'block';
  modalBackgroundMaconha.style.display = 'none';
  modalBackgroundVape.style.display = 'none';
  modalBackgroundCocaina2.style.display = 'none';
});

modalBackground.addEventListener('click', function(event) {
if (event.target === modalBackground) {
  modalBackground.style.display = 'none';
  modalBackgroundHeroina.style.display = 'none';
  modalBackgroundMaconha.style.display = 'none';
  modalBackgroundVape.style.display = 'none';
  modalBackgroundCocaina2.style.display = 'none';
}
});