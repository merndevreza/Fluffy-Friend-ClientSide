/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      laila: ["Laila", "serif"],
      nunito: ["Nunito", "sans-serif"],
    },
   colors: {
     "theme-yellow": "#feab0c", 
     "theme-black": "#04102e",
     "theme-dark":"#0f172a",
     "theme-dark-top":"#1e293b",
     "theme-light":"#f4f4f4",
     "white":"#fff"
   },
   extend: {
    backgroundImage: {
    'cta-bg': "url('./src/assets/images/cta-bg.jpg')", 
  }},
 },
  plugins: [require("daisyui")],
}

