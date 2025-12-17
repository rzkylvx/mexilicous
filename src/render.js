export function renderHTML() {
  return `
<!-- Custom Cursor -->
<div class="cursor-dot"></div>
<div class="cursor-outline"></div>

<!-- Loader -->
<div class="loader">
  <div class="loader-text">NINEPRENEUR</div>
  <div class="loader-overlay"></div>
</div>

<!-- Transition Overlay -->
<div class="transition-container" aria-hidden="true">
  <div class="transition-bar"></div>
  <div class="transition-bar"></div>
  <div class="transition-bar"></div>
  <div class="transition-bar"></div>
  <div class="transition-bar"></div>
</div>
<div class="transition-text-container" aria-hidden="true">
  <div class="transition-text">MEXILICIOUS</div>
</div>

<!-- Navigation -->
<header class="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
  <a href="#" class="text-2xl font-bold tracking-tighter" aria-label="Mexilicious Home">MEXILICIOUS.</a>
  <nav class="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase">
    <a href="#menu" class="hover-trigger hover:text-orange-400 transition-colors">Menu</a>
    <a href="#story" class="hover-trigger hover:text-orange-400 transition-colors">Cerita</a>
    <a href="#lab" class="hover-trigger hover:text-orange-400 transition-colors">Lab</a>
    <a href="#team" class="hover-trigger hover:text-orange-400 transition-colors">Tim</a>
    <a href="#faq" class="hover-trigger hover:text-orange-400 transition-colors">FAQ</a>
  </nav>
  <a href="https://wa.me/62881023491437?text=Halo%2C%20saya%20ingin%20membeli%20nachos%20mexilicous" target="_blank" aria-label="Pesan Sekarang" class="hover-trigger border border-white/30 px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">Pesan Sekarang</a>
</header>

<main>
  ${renderHero()}
  ${renderMarquee()}
  ${renderStory()}
  ${renderIngredients()}
  ${renderMenu()}
  ${renderLab()}
  ${renderTeam()}
  ${renderFAQ()}
  ${renderGame()}
  ${renderFooter()}
</main>

${renderChat()}
`;
}


function renderHero() {
  return `
<section class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f0f0f]" aria-label="Hero Section">
  <div id="canvas-container"></div>
  <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none"></div>
  <div class="relative z-10 text-center flex flex-col items-center">
    <p class="hero-subtitle text-orange-500 font-mono tracking-widest mb-4 overflow-hidden">
      <span class="inline-block transform translate-y-full">EST. 2024 &bull; NACHOS INSTAN</span>
    </p>
    <h1 class="hero-title text-[14vw] leading-[0.85] mix-blend-overlay opacity-90 tracking-tight">MEXILICIOUS</h1>
    <div class="mt-4 relative overflow-hidden" aria-hidden="true">
      <span class="text-xl md:text-3xl font-light tracking-[0.5em] text-white/90 uppercase block">NIKMATNYA RAOS</span>
    </div>
    <div class="mt-12 scroll-indicator overflow-hidden">
      <div class="w-[1px] h-24 bg-white/20 mx-auto relative">
        <div class="absolute top-0 left-0 w-full h-full bg-orange-500 origin-top scale-y-0 animate-scroll-line"></div>
      </div>
    </div>
  </div>
</section>`;
}

function renderMarquee() {
  return `
<div class="w-full bg-[#0f0f0f] border-y border-white/10 text-white py-6 overflow-hidden whitespace-nowrap z-20 relative" aria-hidden="true">
  <div class="marquee-content inline-block text-2xl md:text-3xl font-serif italic tracking-[0.2em] font-light">
    NACHOS INSTAN <span class="text-orange-500 mx-6 text-xl">●</span> SIAP MAKAN <span class="text-orange-500 mx-6 text-xl">●</span> NIKMATNYA RAOS <span class="text-orange-500 mx-6 text-xl">●</span> RASA OTENTIK <span class="text-orange-500 mx-6 text-xl">●</span> PRAKTIS & PREMIUM <span class="text-orange-500 mx-6 text-xl">●</span>
    NACHOS INSTAN <span class="text-orange-500 mx-6 text-xl">●</span> SIAP MAKAN <span class="text-orange-500 mx-6 text-xl">●</span> NIKMATNYA RAOS <span class="text-orange-500 mx-6 text-xl">●</span>
  </div>
</div>`;
}


function renderStory() {
  return `
<section id="story" class="py-32 px-6 md:px-20 relative bg-[#0f0f0f]" aria-labelledby="story-title">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
    <div class="text-content">
      <h2 id="story-title" class="text-6xl md:text-8xl mb-8 split-text">KELEZATAN <br><span class="text-orange-500 italic serif-font">INSTAN.</span></h2>
      <p class="text-xl text-gray-400 leading-relaxed max-w-md fade-in-up">Mexilicious adalah definisi baru dari kelezatan praktis. Perpaduan sempurna antara keripik tortilla jagung asli yang renyah dengan saus keju lumer premium yang siap santap.</p>
      <div class="mt-12 fade-in-up">
        <a href="#" class="hover-trigger inline-flex items-center gap-4 text-white uppercase tracking-widest text-sm group">
          <span class="w-12 h-[1px] bg-white transition-all duration-300 group-hover:w-20 group-hover:bg-orange-500"></span>
          Cara Penyajian
        </a>
      </div>
    </div>
    <div class="relative h-[600px] w-full rounded-lg overflow-hidden">
      <video src="/video/marketing.mp4" class="w-full h-full object-cover" autoplay muted loop playsinline></video>
      <div class="absolute bottom-0 left-0 p-8 bg-black/50 backdrop-blur-md">
        <p class="font-mono text-xs text-orange-400">VIDEO</p>
        <p class="text-2xl font-bold">Siap Dalam Sekejap</p>
      </div>
    </div>
  </div>
</section>`;
}


function renderIngredients() {
  const ingredients = [
    { title: 'Tortilla Chips', desc: 'Keripik jagung asli yang renyah dan kokoh, siap dicocol.', color: 'text-yellow-400', img: 'photo-1618621768058-542e664d7dfa', info: 'BAHAN: JAGUNG PILIHAN' },
    { title: 'Kentang', desc: 'Potongan kentang asli yang diproses dengan teknologi modern.', color: 'text-green-400', img: 'photo-1518015304653-996ba585e7d4', info: 'SUMBER: DATARAN TINGGI' },
    { title: 'Saos', desc: 'Saus rahasia yang kental dan gurih, melengkapi setiap gigitan.', color: 'text-red-500', img: 'photo-1574155376612-bfa558929307', info: 'RASA: OTENTIK' },
  ];

  const cards = ingredients.map(i => `
    <article class="ingredient-card flex-shrink-0 w-full md:w-[400px] h-auto min-h-[450px] md:h-[550px] bg-[#0f0f0f] border border-white/10 relative group overflow-hidden rounded-2xl">
      <div class="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://images.unsplash.com/${i.img}?q=80&w=800&auto=format&fit=crop&fm=webp');"></div>
      <div class="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
        <h3 class="text-4xl ${i.color} mb-2">${i.title}</h3>
        <p class="text-gray-300 mb-4">${i.desc}</p>
        <div class="w-full h-[1px] bg-white/20"></div>
        <p class="mt-4 font-mono text-xs text-gray-500">${i.info}</p>
      </div>
    </article>
  `).join('');

  return `
<section id="ingredients" class="min-h-screen flex flex-col justify-center py-20 overflow-hidden bg-[#1a1a1a]" aria-labelledby="ingredients-title">
  <div class="container mx-auto px-6 mb-12">
    <h2 id="ingredients-title" class="text-5xl md:text-7xl text-center split-text">TIGA <span class="text-stroke text-transparent" style="-webkit-text-stroke: 1px white;">KOMPONEN</span> UTAMA</h2>
  </div>
  <div class="horizontal-scroll-wrapper flex flex-col md:flex-row gap-10 px-6 md:px-20 w-full md:w-max">
    ${cards}
    <div class="hidden md:block flex-shrink-0 w-[100px]"></div>
  </div>
</section>`;
}


function renderMenu() {
  return `
<section id="menu" class="py-32 relative" aria-labelledby="menu-title">
  <div class="container mx-auto px-6">
    <div class="flex justify-between items-end mb-20">
      <h2 id="menu-title" class="text-7xl md:text-9xl">VARIAN <br> UTAMA</h2>
      <p class="hidden md:block text-xl max-w-xs text-right">Peringatan: Stok di rumah mungkin cepat habis karena terlalu nikmat.</p>
    </div>
    <div class="menu-item group relative w-full border-t border-b border-white/20 py-12 transition-all duration-500 hover:bg-white/5">
      <div class="flex flex-col md:flex-row justify-between items-center z-10 relative">
        <span class="font-mono text-orange-500 text-xl mb-4 md:mb-0">01</span>
        <h3 class="text-5xl md:text-8xl group-hover:translate-x-10 transition-transform duration-500">MEXILICIOUS ORIGINAL</h3>
        <span class="text-3xl font-serif italic text-gray-400">Rp 15k</span>
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rotate-12 z-0 hidden md:block">
        <img src="https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=600&auto=format&fit=crop&fm=webp" class="w-full h-full object-cover rounded-lg" alt="Nachos Original" width="600" height="400" loading="lazy">
      </div>
    </div>
  </div>
</section>`;
}


function renderLab() {
  const options = {
    base: ['Jagung Bakar', 'Rumput Laut', 'Singkong Pedas'],
    protein: ['Sapi Panggang', 'Ayam Bawang', 'Balado Jeruk'],
    cheese: ['Keju Pedas', 'Mayo Truffle', 'Cokelat Meksiko'],
    topping: ['Abon Sapi', 'Bawang Goreng', 'Nori Remuk']
  };

  const labels = { base: 'Keripik', protein: 'Bumbu Utama', cheese: 'Saus Celup', topping: 'Topping Kering' };

  const selectors = Object.entries(options).map(([key, vals]) => `
    <div class="space-y-2">
      <p class="text-orange-500 text-xs uppercase tracking-wider">${labels[key]}</p>
      ${vals.map(v => `<button class="lab-option w-full" onclick="selectOption(this, '${key}', '${v}')">${v}</button>`).join('')}
    </div>
  `).join('');

  return `
<section id="lab" class="py-20 px-6 md:px-20 bg-[#111] relative border-y border-white/10" aria-labelledby="lab-title">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <p class="text-orange-500 font-mono tracking-widest mb-4">RACIK VARIANMU</p>
      <h2 id="lab-title" class="text-4xl md:text-6xl text-white mb-6">THE FLAVOR <span class="serif-font italic text-gray-500">LAB</span></h2>
      <p class="text-gray-400">Pilih kombinasi rasa impianmu, dan biarkan AI kami membayangkan produk Mexilicious masa depan.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 font-mono text-sm" role="group" aria-label="Pemilih Bahan">${selectors}</div>
    <div class="text-center mb-12">
      <button onclick="generateBlueprint()" class="hover-trigger bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
        <i data-lucide="sparkles" class="w-4 h-4"></i> Ciptakan Rasa
      </button>
    </div>
    <div id="labResult" class="lab-result border border-white/10 bg-black/50 p-8 text-center hidden flex-col justify-center items-center" aria-live="polite">
      <div class="nacho-spinner"></div>
      <div id="labThinkingText" class="thinking-text text-orange-500 font-mono text-lg tracking-widest">MERACIK BUMBU DIGITAL...</div>
    </div>
    <div id="labContent" class="lab-result border border-white/10 bg-black/50 p-8 text-center hidden" aria-live="polite">
      <h3 id="labTitle" class="text-3xl md:text-5xl text-orange-500 mb-4 font-serif italic"></h3>
      <p id="labDesc" class="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"></p>
      <div class="mt-6 pt-6 border-t border-white/10 w-full flex justify-center gap-4">
        <span class="text-xs font-mono text-gray-500 uppercase">Chef AI: MexiBot 1.0</span>
      </div>
    </div>
  </div>
</section>`;
}


function renderTeam() {
  const teamMembers = [
    { name: 'Sandi', role: 'Lead', span: 'col-span-2 md:col-span-1' },
    { name: 'Yuni', role: 'Operational Manager' },
    { name: 'Gifran', role: 'Sales & Marketing' },
    { name: 'Gina', role: 'Sales & Marketing' },
    { name: 'Tina', role: 'Accounting' },
    { name: 'Wildan', role: 'Admin' },
    { name: 'Ihsan', role: 'Production' },
    { name: 'Randi', role: 'Production' },
    { name: 'Rizky', role: 'Production' },
  ];

  const cards = teamMembers.map(m => `
    <article class="team-card group cursor-none text-center ${m.span || 'col-span-1'}">
      <div class="overflow-hidden mb-3 md:mb-6 aspect-[3/4] relative ${m.span ? 'w-[50%]' : 'w-full'} md:w-[70%] mx-auto rounded-lg">
        <img src="/team/${m.name}.jpg" class="w-full h-full object-cover team-img" alt="Foto ${m.name}" width="400" height="533" loading="lazy" onerror="this.style.display='none'">
      </div>
      <h3 class="text-lg md:text-3xl mb-1 text-white group-hover:text-orange-500 transition-colors">${m.name}</h3>
      <p class="text-gray-500 font-mono text-[10px] md:text-sm uppercase tracking-widest">${m.role}</p>
    </article>
  `).join('');

  return `
<section id="team" class="py-32 px-6 md:px-20 bg-[#0f0f0f] relative z-10" aria-labelledby="team-title">
  <div class="mb-20 text-center">
    <p class="text-orange-500 font-mono tracking-widest mb-4">DI BALIK KEMASAN</p>
    <h2 id="team-title" class="text-5xl md:text-7xl text-white split-text">TIM <span class="serif-font italic text-gray-500">INOVASI</span></h2>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">${cards}</div>
</section>`;
}


function renderFAQ() {
  const faqs = [
    { q: 'Bagaimana cara menyajikannya?', a: 'Sangat mudah! Buka kemasan keripik dan tuangkan ke wadah. Buka kemasan saus keju, lalu cocol dan nikmati!' },
    { q: 'Apakah aman dikirim ke luar kota?', a: 'Ya! Kemasan kami didesain dengan teknologi air-cushion untuk mencegah keripik hancur.' },
    { q: 'Berapa lama kadaluarsanya?', a: 'Mexilicious tahan hingga 6 bulan di suhu ruangan dalam kondisi segel tertutup.' },
    { q: 'Apakah sudah Halal?', a: 'Tentu! Seluruh bahan baku Mexilicious telah tersertifikasi Halal.' },
  ];

  const items = faqs.map((f, i) => `
    <div class="faq-item border-t ${i === faqs.length - 1 ? 'border-b' : ''} border-white/20">
      <button aria-expanded="false" class="w-full py-8 flex justify-between items-center hover-trigger group text-left">
        <span class="text-2xl font-bold group-hover:text-orange-500 transition-colors">${f.q}</span>
        <i data-lucide="plus" class="faq-icon w-6 h-6 group-hover:text-orange-500"></i>
      </button>
      <div class="faq-answer text-gray-400 text-lg max-w-2xl"><div class="pb-8">${f.a}</div></div>
    </div>
  `).join('');

  return `
<section id="faq" class="py-32 px-6 md:px-20 bg-[#111]" aria-labelledby="faq-title">
  <div class="flex flex-col md:flex-row gap-12">
    <div class="w-full md:w-1/3">
      <h2 id="faq-title" class="text-6xl md:text-8xl mb-6 sticky top-32">FAQ.</h2>
    </div>
    <div class="w-full md:w-2/3">${items}</div>
  </div>
</section>`;
}


function renderGame() {
  return `
<section id="game" class="py-20 bg-[#0a0a0a] relative overflow-hidden border-y border-white/10">
  <div class="container mx-auto px-6 text-center">
    <p class="text-orange-500 font-mono tracking-widest mb-4">TANTANGAN MEXILICIOUS</p>
    <h2 class="text-4xl md:text-6xl text-white mb-8">NACHO <span class="serif-font italic text-gray-500">FLAPPY</span></h2>
    <p class="text-gray-400 mb-8 max-w-lg mx-auto">Ketuk atau klik untuk melompat. Raih skor 9 untuk mendapatkan hadiah spesial!</p>
    <div class="relative w-full max-w-md mx-auto aspect-[3/4] md:aspect-[4/3] bg-gray-900 rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl">
      <canvas id="flappyCanvas" class="w-full h-full block cursor-pointer"></canvas>
      <div id="gameStartScreen" class="absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-10">
        <p class="text-white text-2xl font-bold mb-4">SIAP TERBANG?</p>
        <button id="startGameBtn" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">MULAI MAIN</button>
      </div>
      <div class="absolute top-4 left-0 w-full text-center pointer-events-none">
        <span id="gameScore" class="text-4xl font-black text-white drop-shadow-lg font-mono">0</span>
      </div>
    </div>
  </div>
  <div id="rewardPopup" class="fixed inset-0 z-[100002] flex items-center justify-center px-4 opacity-0 pointer-events-none transition-opacity duration-300">
    <div class="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
    <div class="bg-[#1a1a1a] border border-orange-500 rounded-2xl p-8 max-w-sm w-full relative transform scale-90 transition-transform duration-300 shadow-[0_0_50px_rgba(255,77,0,0.3)]">
      <button id="closeRewardBtn" class="absolute top-4 right-4 text-gray-400 hover:text-white hover-trigger transition-colors"><i data-lucide="x" class="w-6 h-6"></i></button>
      <div class="text-center">
        <div class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce"><i data-lucide="gift" class="w-10 h-10 text-white"></i></div>
        <h3 class="text-3xl font-bold text-white mb-2 uppercase">SELAMAT!</h3>
        <p class="text-gray-300 mb-6">Kamu berhak mendapatkan <span class="text-orange-500 font-bold">DISKON Rp. 3000</span> untuk pembelian pertamamu.</p>
        <div class="bg-black/50 p-4 rounded-lg border border-dashed border-white/30 mb-6">
          <p class="text-xs text-gray-500 font-mono mb-1">KODE KUPON:</p>
          <p id="couponCode" class="text-xl font-bold text-orange-400 tracking-widest select-all">NACHOSFLAPPY</p>
        </div>
        <button id="claimBtn" onclick="copyCoupon()" class="w-full bg-white text-black font-bold py-3 rounded-full hover:bg-gray-200 transition-colors hover-trigger">KLAIM SEKARANG</button>
      </div>
    </div>
  </div>
</section>`;
}


function renderFooter() {
  return `
<section id="cta-section" class="min-h-screen flex flex-col justify-center items-center bg-orange-600 text-black relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
  <div class="relative z-10 text-center">
    <p class="font-serif italic text-2xl mb-6 animate-bounce">Lapar tengah malam?</p>
    <h2 class="text-[12vw] leading-none font-black hover-trigger hover:scale-110 transition-transform duration-500 cursor-none">ORDER <br> SEKARANG</h2>
    <a href="https://wa.me/62881023491437?text=Halo%2C%20saya%20ingin%20membeli%20nachos%20mexilicous" target="_blank" class="mt-12 border-2 border-black px-10 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-black hover:text-orange-500 transition-all duration-300 hover-trigger inline-block">Beli Online</a>
  </div>
  <footer class="absolute bottom-0 w-full p-6 flex justify-between items-end font-mono text-sm">
    <div>&copy; 2025 Mexilicious.<br>Created by NINEPRENEUR.</div>
    <div class="flex gap-6">
      <a href="https://www.instagram.com/ninepreneur6/" class="hover:underline hover-trigger">Instagram</a>
      <a href="#" class="hover:underline hover-trigger">Shopee</a>
    </div>
  </footer>
</section>`;
}

function renderChat() {
  return `
<div class="chat-widget">
  <div class="chat-window" id="chatWindow" role="dialog" aria-labelledby="chat-header-text" aria-hidden="true">
    <div class="chat-header">
      <span id="chat-header-text" class="font-bold tracking-widest">MEXIBOT</span>
      <button id="closeChat" aria-label="Tutup Chat" class="hover-trigger hover:text-black transition-colors"><i data-lucide="x" class="w-5 h-5"></i></button>
    </div>
    <div class="chat-messages" id="chatMessages">
      <div class="message bot">Halo! Saya MexiBot. Mau tanya soal varian Mexilicious atau cara penyajian instan kami? 🌮</div>
    </div>
    <div class="chat-input-area">
      <input type="text" id="chatInput" aria-label="Ketik pesan" class="chat-input hover-trigger" placeholder="Tanya soal nachos...">
      <button id="sendMessage" aria-label="Kirim Pesan" class="hover-trigger bg-orange-500 p-2 rounded-lg text-white hover:bg-orange-600 transition-colors"><i data-lucide="send" class="w-4 h-4"></i></button>
    </div>
  </div>
  <button class="chat-button hover-trigger" id="toggleChat" aria-label="Buka Chat Bantuan"><i data-lucide="message-circle" class="w-8 h-8 text-white"></i></button>
</div>`;
}
