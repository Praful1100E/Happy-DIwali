document.addEventListener('DOMContentLoaded', function() {
    const fireworksContainer = document.querySelector('.fireworks');

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.backgroundColor = getRandomColor();
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

    function launchRocket() {
        const rocket = document.createElement('div');
        rocket.classList.add('rocket');
        rocket.style.left = Math.random() * 100 + '%';
        fireworksContainer.appendChild(rocket);

        setTimeout(() => {
            explodeRocket(rocket);
            rocket.remove();
        }, 2000);
    }

    function explodeRocket(rocket) {
        const explosionX = parseFloat(rocket.style.left);
        const explosionY = 15; // Slightly below top for better visibility

        // Create a big flash at explosion point
        const flash = document.createElement('div');
        flash.style.position = 'absolute';
        flash.style.left = explosionX + '%';
        flash.style.top = explosionY + '%';
        flash.style.width = '60px';
        flash.style.height = '60px';
        flash.style.backgroundColor = '#ffffff';
        flash.style.borderRadius = '50%';
        flash.style.boxShadow = '0 0 30px #ffffff, 0 0 60px #ffff00';
        flash.style.animation = 'flash 0.4s ease-out forwards';
        fireworksContainer.appendChild(flash);
        setTimeout(() => flash.remove(), 400);

        // Create multiple layers of particles for a bigger explosion
        for (let layer = 0; layer < 3; layer++) {
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = explosionX + '%';
                particle.style.top = explosionY + '%';
                particle.style.backgroundColor = getRandomColor();
                const angle = (i / 30) * 2 * Math.PI + (layer * 0.5);
                const distance = Math.random() * 400 + 150 + (layer * 50);
                particle.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
                particle.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
                particle.style.animationDelay = (layer * 0.1) + 's';
                fireworksContainer.appendChild(particle);

                setTimeout(() => {
                    particle.remove();
                }, 2500);
            }
        }
    }

    function getRandomColor() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98fb98', '#ff4500', '#ffff00'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createLightning() {
        const lightning = document.createElement('div');
        lightning.classList.add('lightning');
        lightning.style.left = Math.random() * 100 + '%';
        fireworksContainer.appendChild(lightning);

        setTimeout(() => {
            lightning.remove();
        }, 500);
    }

    setInterval(createFirework, 500);
    setInterval(launchRocket, 3000);
    setInterval(createLightning, 8000); // Lightning every 8 seconds
});
