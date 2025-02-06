// Function to create and animate floating rose emojis
function createRoses() {
    const rosesContainer = document.getElementById('rosesContainer');
    const numberOfRoses = 5; // Number of roses to generate

    for (let i = 0; i < numberOfRoses; i++) {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.style.left = `${Math.random() * 100}%`;
        rose.style.animationDelay = `${Math.random() * 1}s`;
        rose.style.fontSize = `${Math.random() * 20 + 20}px`;
        rose.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;

        // Use a rose emoji
        rose.innerHTML = '🌹';

        rosesContainer.appendChild(rose);
    }
}

// Start the rose animation
function animateRoses() {
    createRoses();
    requestAnimationFrame(animateRoses);
}

// Initial call to start the animation
animateRoses();
