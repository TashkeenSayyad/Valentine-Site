document.addEventListener("DOMContentLoaded", () => {
  const flowersContainer = document.getElementById("daisyContainer");

  function createDaisy() {
    const daisy = document.createElement("div");
    daisy.classList.add("daisy");
    daisy.innerHTML = "🌼"; // Using the daisy emoji

    // Randomize position, delay, and size
    const randomLeft = Math.random() * 100; // % of screen width
    const randomDelay = Math.random() * 5; // Delay in seconds
    const randomSize = Math.random() * 1.2 + 0.6; // Random scale between 0.6 and 1.8

    daisy.style.left = `${randomLeft}vw`;
    daisy.style.animationDelay = `${randomDelay}s`;
    daisy.style.transform = `scale(${randomSize})`;

    flowersContainer.appendChild(daisy);

    // Remove daisy after animation ends
    setTimeout(() => {
      daisy.remove();
    }, 8000); // Matches animation duration
  }

  // Generate new daisies every 1 second for a fuller effect
  setInterval(createDaisy, 1000);
});
