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
  "Just kidding, say yes please! ❤️",
];

let messageIndex = 0;
let noClickCount = 0;

function handleNoClick() {
  const noButton = document.querySelector(".noButton");
  const yesButton = document.querySelector(".yesButton");

  if (noClickCount < messages.length) {
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    noClickCount++;
  } else {
    // Hide the "No" button after the final message
    noButton.style.visibility = "hidden";
  }

  // Increase the Yes button's font size for a fun effect
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.25}px`;
}

function handleYesClick() {
  // Redirect to the yes page where the celebration GIF will appear
  window.location.href = "yesPage.html";
}

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

  const heartCount = 20; // Adjust the number of hearts here

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerHTML = "💖"; // You can change this to any heart emoji or symbol
    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed of animation
    heart.style.animationDelay = `${Math.random() * 10}s`; // Random start delay
    heartContainer.appendChild(heart);
  }
}

// Call the function to generate hearts when the page loads
window.onload = createHearts;
