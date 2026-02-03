const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const box = document.getElementById("buttonsBox");
const response = document.getElementById("response");

/* YES click */
yesBtn.addEventListener("click", () => {
  response.innerHTML =
    "YAY!!! 💖💖💖<br>You made a greate choice 🥰<br>Happy Valentine’s Day, cutie 🧸🌹";
});

/* move NO button safely */
function moveNoButton() {
  const boxW = box.clientWidth;
  const boxH = box.clientHeight;
  const btnW = noBtn.offsetWidth;
  const btnH = noBtn.offsetHeight;

  const x = Math.random() * (boxW - btnW);
  const y = Math.random() * (boxH - btnH);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* desktop hover */
noBtn.addEventListener("mouseenter", moveNoButton);

/* mobile tap */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});
