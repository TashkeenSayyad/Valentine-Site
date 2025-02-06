const messages = [
    "Are you sure?",
    "Are you really sure??",
    "Are you positive?",
    "Nishu please...",
    "Just think about it!",
    "If you say no, I will be sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let noClickCount = 0;

        // Roses generation
        function createRoses() {
            const rosesContainer = document.getElementById('rosesContainer');
            const numberOfRoses = 1;

            for (let i = 0; i < numberOfRoses; i++) {
                const rose = document.createElement('div');
                rose.className = 'rose';
                rose.style.left = `${Math.random() * 100}%`;
                rose.style.animationDelay = `${Math.random() * 1}s`;
                rose.style.fontSize = `${Math.random() * 20 + 20}px`; // Random size for emoji roses
                rose.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;

                // Use rose emoji or image
                if (Math.random() > 0.5) {
                    rose.innerHTML = '🌹'; // Rose emoji
                } else {
                    // rose.innerHTML = `<img src="documents/rosepic.." alt="Rose">`; // Rose image
                }

                rosesContainer.appendChild(rose);
            }
        }
        // Roses generation
        function createRoses() {
            const rosesContainer = document.getElementById('rosesContainer');
            const numberOfRoses = 1;

            for (let i = 0; i < numberOfRoses; i++) {
                const rose = document.createElement('div');
                rose.className = 'rose';
                rose.style.left = `${Math.random() * 100}%`;
                rose.style.animationDelay = `${Math.random() * 1}s`;
                rose.style.fontSize = `${Math.random() * 20 + 20}px`; // Random size for emoji roses
                rose.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;

                // Use rose emoji or image
                if (Math.random() > 0.5) {
                    rose.innerHTML = '🌹'; // Rose emoji
                } else {
                    // rose.innerHTML = `<img src="documents/rosepic.." alt="Rose">`; // Rose image
                }

                rosesContainer.appendChild(rose);
            }
        }
    function animateRoses() {
        createRoses();
        requestAnimationFrame(animateRoses);
    }

    function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    if (noClickCount < messages.length - 1) {
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
        noClickCount++;
    } else {
        noButton.style.display = 'none';
    }
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}


function handleYesClick() {
    const container = document.querySelector('.container');
    const gifContainer = document.getElementById('gifContainer');
    
    // Add smooth transition
    container.style.opacity = '0';
    container.style.transform = 'translateY(-20px)';
    
    animateRoses();

    setTimeout(() => {
        container.style.display = 'none';
        gifContainer.style.display = 'block';
        gifContainer.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(0, 0, 0, 0.8);
                animation: fadeIn 0.5s ease-out;
            ">
                <img src="https://media1.giphy.com/media/VM1fcpu2bKs1e2Kdbj/giphy.gif" 
                     alt="Cute GIF" 
                     style="max-width: 90vw; max-height: 90vh; object-fit: contain; border-radius: 10px;">
            </div>
        `;
    }, 300); // Match transition duration
}