const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const message = document.querySelector('.contenedor p'); // Selecciona el mensaje

const phrases = [
    "¿Estás segura?",
    "Piénsalo bien...",
    "¿Por qué no me perdonas?",
    "Te haré reír...",
    "No seas mala 😢",
    "¿De verdad no?"
];

// Cuando haces clic en el botón "Sí"
yesBtn.addEventListener('click', function () {
    alert('Te amooooooo❤');
});

// Cuando pasas el mouse sobre el botón "No"
noBtn.addEventListener('mouseover', function () {
    // Generar posiciones aleatorias entre 0 y 90
    const randomX = Math.random() * 90;
    const randomY = Math.random() * 90;

    // Mover el botón
    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;

    // Cambiar el mensaje
    const randomIndex = Math.floor(Math.random() * phrases.length);
    message.textContent = phrases[randomIndex];
});
