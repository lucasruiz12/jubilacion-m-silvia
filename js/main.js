document.addEventListener('DOMContentLoaded', () => {
    // Crear y añadir elementos dinámicamente
    const container = document.getElementById('countdown-container');

    container.className = "countdown-container"

    const title = document.createElement('h1');
    title.textContent = 'Faltan';
    container.appendChild(title);

    const countdown = document.createElement('div');
    countdown.id = 'countdown';
    countdown.className = 'countdown';
    countdown.textContent = '00 días 00 horas 00 minutos 00 segundos';
    container.appendChild(countdown);

    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = 'PARA TU JUBILACIÓN, MARÍA SILVIA';
    container.appendChild(message);

    // Función para calcular y mostrar el conteo regresivo
    function countdownTimer() {
        const targetDate = new Date('September 11, 2024 00:00:00 GMT-0300');
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdown.textContent =
                `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
        } else {
            title.textContent = 'Finalmente:';
            countdown.textContent = "LLEGÓ TU JUBILACIÓN, MARÍA SILVIA!";
            message.textContent = "Muchas felicidades! Feliz cumple."
        }
    }

    // Iniciar el conteo regresivo
    countdownTimer();
    setInterval(countdownTimer, 1000);
});
