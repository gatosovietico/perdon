const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Te amooooooo❤');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    // Generar posiciones aleatorias entre 0 y 90
    const randomX = Math.random() * 90;
    const randomY = Math.random() * 90;

    // Aplicar las posiciones al botón "No"
    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    noBtn.style.transform = `translate(-${randomX}%, -${randomY}%)`;
});
