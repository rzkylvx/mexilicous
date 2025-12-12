# Mexilicious - Landing Page

Website landing page untuk brand Mexilicious (Nachos Instan Premium).

## Tech Stack

- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **GSAP** - Animasi
- **Three.js** - 3D Background
- **Lenis** - Smooth scroll
- **Lucide** - Icons
- **Gemini API** - AI Chat & Lab feature

## Setup

1. Install dependencies:
```bash
npm install
# atau
bun install
```

2. Konfigurasi environment variable:
```bash
cp .env.example .env
```

3. Tambahkan API key Gemini di `.env`:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Jalankan development server:
```bash
npm run dev
```

## Struktur Project

```
src/
├── components/       # Komponen JS modular
│   ├── animations.js # GSAP animations
│   ├── chat.js       # Chat widget (Gemini)
│   ├── cursor.js     # Custom cursor
│   ├── faq.js        # FAQ accordion
│   ├── game.js       # Flappy game
│   ├── lab.js        # Flavor Lab (Gemini)
│   ├── loader.js     # Loading animation
│   ├── navigation.js # Nav transitions
│   └── three-background.js # 3D particles
├── main.js           # Entry point
├── render.js         # HTML templates
└── style.css         # Tailwind + custom CSS
```

## Build

```bash
npm run build
```

Output akan ada di folder `dist/`.
