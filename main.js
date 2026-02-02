const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent = "YAY!!!I am so happppppyyyyyyy! XOXO Dipesh 🥰";
  launchHearts();
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function launchcats () {
  for (let i = 0; i < 100; i++) {
    const cats = document.createElement("div");
    heart.className = "cats";
    heart.textContent = " 😻💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";

    document.body.appendChild(chats);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}
