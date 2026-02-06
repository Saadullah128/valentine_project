const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonsBox = document.getElementById("buttonsBox");
const response = document.getElementById("response");

const yesSound = document.getElementById("yesSound");
const noSound = document.getElementById("noSound");

/* YES: play happy sound */
yesBtn.addEventListener("click", () => {
  response.innerHTML =
    "YAYYYY 💖🥰<br>You just made me the happiest person 🧸🌸";

  yesSound.currentTime = 0;
  yesSound.play();
});

/* move NO button safely */
function moveNoButton() {
  const boxW = buttonsBox.clientWidth;
  const boxH = buttonsBox.clientHeight;
  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const x = Math.random() * (boxW - btnW);
  const y = Math.random() * (boxH - btnH);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // 🔊 play NO sound
  noSound.currentTime = 0;
  noSound.play();
}

/* Desktop: hover */
noBtn.addEventListener("mouseenter", moveNoButton);

/* Mobile: tap */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});
