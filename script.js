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

  if (noClickCount < messages.length - 1) {
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
