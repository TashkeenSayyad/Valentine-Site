document.addEventListener("DOMContentLoaded", () => {
  const flowersContainer = document.getElementById("daisyContainer");

  const audio = document.getElementById("yesSound");
  audio.volume = 0.7; // Adjust volume if needed (0.0 to 1.0)
  audio.play();

  if (flowersContainer) {
    function createDaisy() {
      const daisy = document.createElement("div");
      daisy.classList.add("daisy");
      daisy.innerHTML = "🌼"; // Using the daisy emoji

      // Randomize position, delay, and size
      const randomLeft = Math.random() * 100; // % of screen width
      const randomDelay = 2; // Delay in seconds
      const randomSize = Math.random() * 1.2 + 0.8; // Scale factor between 0.8 and 2.0

      daisy.style.left = `${randomLeft}vw`;
      daisy.style.animationDelay = `${randomDelay}s`;
      daisy.style.transform = `scale(${randomSize})`;

      flowersContainer.appendChild(daisy);

      // Remove daisy after animation completes (8s)
      setTimeout(() => {
        daisy.remove();
      }, 8000);
    }
    // Create new daisies every 0.5 seconds for a fuller effect
    setInterval(createDaisy, 500);
  }

  // Firefly Effect
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

  /* --- Floating Hearts Effect --- */
  function createHearts() {
    const heartContainer = document.createElement("div");
    heartContainer.classList.add("heart-container");
    document.body.appendChild(heartContainer);

    const heartCount = 4;
    for (let i = 0; i < heartCount; i++) {
      const heart = document.createElement("span");
      heart.classList.add("heart");
      heart.innerHTML = "💖"; // Using a heart emoji
      heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Duration between 5s and 10s
      heart.style.animationDelay = `${Math.random() * 10}s`; // Random start delay up to 10s
      heartContainer.appendChild(heart);
    }
  }
  createHearts();
});
