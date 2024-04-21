/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB000",
        secondary: "#969BA0",
        buttonPrimary: "#FFB000",
      },
      fontFamily: {
        primary: "Manrope, sans-serif",
        secondary: "",
        dmsans: "DM Sans, sans-serif",
        inter:"Inter",
        opensans:"Open Sans"

      },
      backgroundImage: {
        "feature-cardbg": "url('/src/assets/img/cardBg.png')",
      },
      boxShadow: {
        custom: "0 0 10px rgba(0,0,0,0.15)",
      },
      screens: {
        "md-1150": "1150px",
      },
    },
  },
  plugins: [],
};
