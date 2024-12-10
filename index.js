const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const message = document.querySelector('.contenedor p'); 

// Lista de videos
const videos = ["imgs/Gato1.mp4", "imgs/Gato2.mp4"];
let currentVideoIndex = 0;

// Referencias al video y su fuente
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");

// Asegurarse de reproducir el primer video al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    videoPlayer.play();
});

// Cambiar video cuando termina el actual
videoPlayer.addEventListener("ended", () => {
    currentVideoIndex++;
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0; // Reinicia al primer video
    }
    videoSource.src = videos[currentVideoIndex];
    videoPlayer.load(); 
    videoPlayer.play();
});

// Botón "Sí"
yesBtn.addEventListener('click', function () {
    alert('Te amooooooo❤');
});

// Botón "No"
const phrases = [
    "¿Estás segura?",
    "Piénsalo bien...",
    "¿Por qué no me perdonas?",
    "Te haré reír...",
    "No seas mala 😢",
    "¿De verdad no?",
    "No seas mala",
    "Pofissss"
];

noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * 90;
    const randomY = Math.random() * 90;

    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;

    const randomIndex = Math.floor(Math.random() * phrases.length);
    message.textContent = phrases[randomIndex];
});
