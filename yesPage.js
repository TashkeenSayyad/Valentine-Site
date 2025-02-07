document.addEventListener("DOMContentLoaded", () => {
  const flowersContainer = document.getElementById("rosesContainer");

  function createDaisy() {
    const daisy = document.createElement("div");
    daisy.classList.add("daisy");
    daisy.innerHTML = "🌼"; // Using the daisy emoji

    // Randomize position, delay, size, and spin
    const randomLeft = Math.random() * 100; // % of screen width
    const randomDelay = Math.random() * 3; // Delay between 0-3s
    const randomSize = Math.random() * 1.4 + 0.6; // Scale between 0.6 and 2
    const randomRotation = Math.random() * 30 - 15; // Slight tilt

    daisy.style.left = `${randomLeft}vw`;
    daisy.style.animationDelay = `${randomDelay}s`;
    daisy.style.transform = `scale(${randomSize}) rotate(${randomRotation}deg)`;

    flowersContainer.appendChild(daisy);

    // Remove daisy after animation ends
    setTimeout(() => {
      daisy.remove();
    }, 7000); // Matches animation duration
  }

  // Generate more daisies per second
  setInterval(() => {
    for (let i = 0; i < 3; i++) {
      // Increase to 4 daisies per interval
      createDaisy();
    }
  }, 700); // More frequent daisies
});
