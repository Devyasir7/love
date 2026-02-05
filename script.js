const btn = document.getElementById("loveBtn");
const secret = document.getElementById("secret");

btn.addEventListener("click", () => {
  secret.classList.toggle("hidden");

  // قلوب بسيطة (مؤثر لطيف)
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💗";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "90vh";
    heart.style.fontSize = (14 + Math.random() * 24) + "px";
    heart.style.transition = "transform 1.2s ease, opacity 1.2s ease";
    heart.style.zIndex = 9999;
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-${70 + Math.random() * 60}vh)`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 1300);
  }
});
const photo = document.getElementById("herPhoto");

btn.addEventListener("click", () => {
  secret.classList.toggle("hidden");
  photo.classList.toggle("hidden");
});
