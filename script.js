const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerHTML = "YAY!!! 💖💖💖<br>You just made me the happiest person 🥰<br>Happy Valentine’s Day, my love 🧸🌹";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 30;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
