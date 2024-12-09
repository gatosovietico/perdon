const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const message = document.querySelector('.contenedor p'); 

// Configurar el video directamente en bucle
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");

// Cambiar el video inicial a Gato2.mp4
videoSource.src = "imgs/Gato2.mp4";
videoPlayer.loop = true; // Activar el bucle
videoPlayer.volume = 1.0; // Configurar volumen al máximo (1.0)
videoPlayer.load();

// Manejar reproducción después de la interacción
document.body.addEventListener('click', () => {
    videoPlayer.play(); // Reproducir video tras interacción
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
