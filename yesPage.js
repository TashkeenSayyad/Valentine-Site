document.addEventListener("DOMContentLoaded", () => {
  const flowersContainer = document.getElementById("daisyContainer");

  function createDaisy() {
    const daisy = document.createElement("div");
    daisy.classList.add("daisy");
    daisy.innerHTML = "🌼"; // Using the daisy emoji

    // Randomize position, delay, and size
    const randomLeft = Math.random() * 100; // % of screen width
    const randomDelay = 1; // Delay in seconds
    const randomSize = Math.random() * 1.2 + 0.8; // Random scale between 0.6 and 1.8

    daisy.style.left = `${randomLeft}vw`;
    daisy.style.animationDelay = `${randomDelay}s`;
    daisy.style.transform = `scale(${randomSize})`;

    flowersContainer.appendChild(daisy);

    // Remove daisy after animation ends
    setTimeout(() => {
      daisy.remove();
    }, 8000); // Matches animation duration
  }
  // Generate new daisies every 0.5 second for a fuller effect
  setInterval(createDaisy, 500);
});

// Firefly effect
document.addEventListener("DOMContentLoaded", () => {
  const fireflyContainer = document.createElement("div");
  fireflyContainer.classList.add("fireflies-container");
  document.body.appendChild(fireflyContainer);

  for (let i = 0; i < 25; i++) {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");
    firefly.style.left = `${Math.random() * 100}vw`;
    firefly.style.top = `${Math.random() * 75}vh`;
    fireflyContainer.appendChild(firefly);
  }
});

// Generate random hearts that float across the screen
function createHearts() {
  const heartContainer = document.createElement("div");
  heartContainer.classList.add("heart-container");
  document.body.appendChild(heartContainer);

  const heartCount = 7;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed of animation
    heart.style.animationDelay = `${Math.random() * 10}s`; // Random start delay
    heartContainer.appendChild(heart);
  }
}

// Call the function to generate hearts when the page loads
window.onload = createHearts;
