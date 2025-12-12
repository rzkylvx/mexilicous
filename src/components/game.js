import { createIcons, icons } from 'lucide';

export function initGame() {
  const canvas = document.getElementById('flappyCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const startScreen = document.getElementById('gameStartScreen');
  const startBtn = document.getElementById('startGameBtn');
  const scoreEl = document.getElementById('gameScore');
  const rewardPopup = document.getElementById('rewardPopup');
  const closeRewardBtn = document.getElementById('closeRewardBtn');

  let canvasWidth = canvas.offsetWidth;
  let canvasHeight = canvas.offsetHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  window.addEventListener('resize', () => {
    canvasWidth = canvas.offsetWidth;
    canvasHeight = canvas.offsetHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  });

  let isPlaying = false;
  let frames = 0;
  let score = 0;
  let gravity = 0.25;
  let jumpForce = 4.5;
  let prizeShown = false;

  const bird = {
    x: 50,
    y: 150,
    w: 30,
    h: 30,
    velocity: 0,
    draw() {
      ctx.save();
      ctx.translate(this.x + this.w/2, this.y + this.h/2);
      ctx.rotate(this.velocity * 0.1);
      ctx.beginPath();
      ctx.moveTo(0, -this.h/2);
      ctx.lineTo(this.w/2, this.h/2);
      ctx.lineTo(-this.w/2, this.h/2);
      ctx.closePath();
      ctx.fillStyle = '#fbbf24';
      ctx.fill();
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    },
    update() {
      this.velocity += gravity;
      this.y += this.velocity;
      if (this.y + this.h > canvasHeight) {
        this.y = canvasHeight - this.h;
        this.velocity = 0;
        gameOver();
      }
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    },
    jump() {
      this.velocity = -jumpForce;
    }
  };

  const pipes = {
    items: [],
    w: 50,
    dx: 3,
    gap: 170,
    draw() {
      ctx.fillStyle = '#4ade80';
      for (let p of this.items) {
        ctx.fillRect(p.x, 0, this.w, p.top);
        ctx.fillRect(p.x, canvasHeight - p.bottom, this.w, p.bottom);
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2;
        ctx.strokeRect(p.x, 0, this.w, p.top);
        ctx.strokeRect(p.x, canvasHeight - p.bottom, this.w, p.bottom);
      }
    },
    update() {
      if (frames % 120 === 0) {
        let topHeight = Math.random() * (canvasHeight - this.gap - 100) + 50;
        this.items.push({
          x: canvasWidth,
          top: topHeight,
          bottom: canvasHeight - this.gap - topHeight,
          passed: false
        });
      }
      for (let i = 0; i < this.items.length; i++) {
        let p = this.items[i];
        p.x -= this.dx;
        if (bird.x + bird.w > p.x && bird.x < p.x + this.w) {
          if (bird.y < p.top || bird.y + bird.h > canvasHeight - p.bottom) {
            gameOver();
          }
        }
        if (p.x + this.w < bird.x && !p.passed) {
          score++;
          p.passed = true;
          scoreEl.innerText = score;
          if (score === 9 && !prizeShown) {
            showReward();
          }
        }
        if (p.x + this.w < 0) {
          this.items.shift();
          i--;
        }
      }
    }
  };

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pipes.draw();
    bird.draw();
  }

  function update() {
    bird.update();
    pipes.update();
    frames++;
  }

  function loop() {
    if (!isPlaying) return;
    update();
    draw();
    requestAnimationFrame(loop);
  }

  function gameOver() {
    isPlaying = false;
    startScreen.classList.remove('hidden');
    startScreen.style.display = 'flex';
    const msg = startScreen.querySelector('p');
    msg.innerHTML = `GAME OVER<br><span class="text-sm font-normal">Skor: ${score}</span>`;
    startBtn.innerText = "COBA LAGI";
  }

  function resetGame() {
    bird.y = 150;
    bird.velocity = 0;
    pipes.items = [];
    score = 0;
    frames = 0;
    scoreEl.innerText = score;
    prizeShown = false;
    isPlaying = true;
    startScreen.style.display = 'none';
    loop();
  }

  function showReward() {
    isPlaying = false;
    prizeShown = true;
    rewardPopup.classList.remove('pointer-events-none', 'opacity-0');
    rewardPopup.classList.add('pointer-events-auto', 'opacity-100');
    const inner = rewardPopup.querySelector('div.relative');
    inner.classList.remove('scale-90');
    inner.classList.add('scale-100');
  }

  const action = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    if (isPlaying) bird.jump();
  };

  canvas.addEventListener('mousedown', action);
  canvas.addEventListener('touchstart', action, { passive: false });
  startBtn.addEventListener('click', resetGame);

  closeRewardBtn.addEventListener('click', () => {
    rewardPopup.classList.add('pointer-events-none', 'opacity-0');
    rewardPopup.classList.remove('pointer-events-auto', 'opacity-100');
    gameOver();
    const msg = startScreen.querySelector('p');
    msg.innerHTML = `MENANG!<br><span class="text-sm font-normal">Kupon telah disimpan.</span>`;
  });
}

export function copyCoupon() {
  const couponCode = "RAOSFLAPPY";
  const textArea = document.createElement("textarea");
  textArea.value = couponCode;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  const btn = document.getElementById("claimBtn");
  btn.innerText = "KODE TERSALIN!";
  btn.classList.remove("bg-white", "text-black");
  btn.classList.add("bg-green-500", "text-white");

  setTimeout(() => {
    btn.innerText = "KLAIM SEKARANG";
    btn.classList.remove("bg-green-500", "text-white");
    btn.classList.add("bg-white", "text-black");
  }, 2000);
}

window.copyCoupon = copyCoupon;
