document.addEventListener("DOMContentLoaded", () => {  
    const audio = document.getElementById("noSound");
    audio.volume = 0.7; // Adjust volume if needed (0.0 to 1.0)
    audio.play();
});