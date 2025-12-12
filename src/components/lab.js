const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let selectedIngredients = {
  base: null,
  protein: null,
  cheese: null,
  topping: null
};

export function selectOption(el, category, value) {
  const siblings = el.parentElement.querySelectorAll('.lab-option');
  siblings.forEach(sib => sib.classList.remove('selected'));
  el.classList.add('selected');
  selectedIngredients[category] = value;
}

export async function generateBlueprint() {
  if (!selectedIngredients.base || !selectedIngredients.protein || 
      !selectedIngredients.cheese || !selectedIngredients.topping) {
    alert("Harap pilih semua bahan terlebih dahulu!");
    return;
  }

  const labResult = document.getElementById('labResult');
  const labContent = document.getElementById('labContent');
  const labTitle = document.getElementById('labTitle');
  const labDesc = document.getElementById('labDesc');
  const labThinkingText = document.getElementById('labThinkingText');

  labContent.classList.add('hidden');
  labResult.classList.remove('hidden');
  labResult.classList.add('flex');

  const loadingPhrases = [
    "MENGKALIBRASI TINGKAT PEDAS...",
    "MENGHITUNG VISKOSITAS KEJU...",
    "MENCARI INSPIRASI AZTEC...",
    "MENYUSUN ARSITEKTUR KERENYAHAN...",
  ];

  let phraseIndex = 0;
  const thinkingInterval = setInterval(() => {
    labThinkingText.style.opacity = 0;
    setTimeout(() => {
      phraseIndex = (phraseIndex + 1) % loadingPhrases.length;
      labThinkingText.textContent = loadingPhrases[phraseIndex];
      labThinkingText.style.opacity = 1;
    }, 300);
  }, 2000);

  if (!API_KEY) {
    clearInterval(thinkingInterval);
    labResult.innerHTML = "<div class='text-red-500'>API Key belum dikonfigurasi. Tambahkan VITE_GEMINI_API_KEY di .env</div>";
    return;
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;
  
  const prompt = `Kamu adalah ahli kuliner kreatif untuk brand Mexilicious (Nachos Instan Premium Indonesia).
User memilih kombinasi bahan berikut untuk nachos impian mereka:
- Keripik: ${selectedIngredients.base}
- Bumbu Utama: ${selectedIngredients.protein}
- Saus Celup: ${selectedIngredients.cheese}
- Topping Kering: ${selectedIngredients.topping}

Buatkan nama produk yang catchy (dalam Bahasa Indonesia, boleh campur Inggris/Spanyol) dan deskripsi singkat (2-3 kalimat) yang menggugah selera untuk kombinasi ini. Format JSON: {"title": "...", "description": "..."}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });
    const data = await response.json();
    const result = JSON.parse(data.candidates[0].content.parts[0].text);

    labTitle.textContent = result.title || "Mexi-Creation";
    labDesc.textContent = result.description || "Kreasimu yang luar biasa.";

    clearInterval(thinkingInterval);
    labResult.classList.add('hidden');
    labResult.classList.remove('flex');
    labContent.classList.remove('hidden');
  } catch (error) {
    console.error(error);
    clearInterval(thinkingInterval);
    labResult.innerHTML = "<div class='text-red-500'>Sistem Overload. Coba lagi.</div>";
  }
}

// Expose to window for onclick handlers
window.selectOption = selectOption;
window.generateBlueprint = generateBlueprint;
