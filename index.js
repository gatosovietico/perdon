const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const message = document.querySelector('.contenedor p'); 

const phrases = [
    "¿Estás segura?",
    "Piénsalo bien...",
    "¿Por qué no me perdonas?",
    "Te haré reír...",
    "No seas mala 😢",
    "¿De verdad no?"
];

yesBtn.addEventListener('click', function () {
    alert('Te amooooooo❤');
});


noBtn.addEventListener('mouseover', function () {
    const randomX = Math.random() * 90;
    const randomY = Math.random() * 90;

    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;

    const randomIndex = Math.floor(Math.random() * phrases.length);
    message.textContent = phrases[randomIndex];
});
