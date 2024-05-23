/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
    newFont: ["Playfair Display", 'serif'],
    serif: ['Merriweather', 'serif'],
  },
    extend: {},
  },
  plugins: [],
}

