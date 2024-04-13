/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#FFB000",
        secondary:"#969BA0",
        buttonPrimary:"#FFB000",
      },
      fontFamily: {
        primary:"Manrope, sans-serif",
        secondary: ""
      },
      backgroundImage: {
        'feature-cardbg': "url('/src/assets/img/cardBg.png')",
        
      },
    },
  },
  plugins: [],
}