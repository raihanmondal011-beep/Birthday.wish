// Confetti Effect
const confettiCanvas = document.getElementById("confetti-canvas");
const ctx = confettiCanvas.getContext("2d");
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confetti = [];

function randomColor() {
  const colors = ["#ff0", "#f0f", "#0ff", "#0f0", "#ff5733", "#33ff57"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createConfetti() {
  return {
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    size: Math.random() * 8 + 5,
    speed: Math.random() * 3 + 2,
    color: randomColor(),
  };
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.speed;
    if (c.y > confettiCanvas.height) {
      c.y = -10;
      c.x = Math.random() * confettiCanvas.width;
    }
  });
}

function animateConfetti() {
  drawConfetti();
  requestAnimationFrame(animateConfetti);
}

for (let i = 0; i < 150; i++) {
  confetti.push(createConfetti());
}

// Main Celebration Function
function startCelebration() {
  document.getElementById("birthday-song").play();
  animateConfetti();
  alert("🎉 Surprise! Enjoy your Special Day 🥳🎂");
}
