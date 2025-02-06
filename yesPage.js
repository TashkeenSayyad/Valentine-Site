// Function to create and animate floating rose emojis
function createRoses() {
  const rosesContainer = document.getElementById("rosesContainer");
  if (!rosesContainer) return;

  const numberOfRoses = 1; // Limit the number of roses
  rosesContainer.innerHTML = ""; // Clear existing roses

  for (let i = 0; i < numberOfRoses; i++) {
    const rose = document.createElement("div");
    rose.className = "rose";
    rose.style.left = `${Math.random() * 100}%`;
    rose.style.animationDelay = `2s`; // More staggered appearance
    rose.innerHTML = "🌹";
    rosesContainer.appendChild(rose);
  }
}

// Start the rose animation only if the container exists
if (document.getElementById("rosesContainer")) {
  setInterval(createRoses, 5000); // Slower rose animation
}

// Fade in the GIF container when the page loads
window.addEventListener("DOMContentLoaded", () => {
  const gifContainer = document.getElementById("gifContainer");
  if (gifContainer) {
    gifContainer.style.opacity = "0";
    gifContainer.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
      gifContainer.style.opacity = "1";
    }, 200);
  }
}); 
