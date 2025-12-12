/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ff4d00',
        gold: '#fbbf24',
        green: '#4ade80',
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
};
