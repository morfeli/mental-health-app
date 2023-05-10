/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const styles = plugin(function ({ addUtilities }) {
  addUtilities({
    ".cardBackground": {
      background:
        "linear-gradient(#FF0180, #FF0180) padding-box, linear-gradient(#FF0180, #420F87) border-box",
    },
    ".animate-delay-sphere-2": {
      animationDelay: "2s",
    },
    ".animate-delay-sphere-3": {
      animationDelay: "4s",
    },
  });
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#168aad",
        blueSecondary: "#34a0a4",
        greenPrimary: "#52b69a",
        greenSecondary: "#76c893",
        yellowPrimary: "#ffe566",
        yellowSecondary: "#fff2b2",
        overLay: "rgba(0, 0, 0, 0.2)",
        overLay2: "rgba(0,0,0,0.1)",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      fontFamily: {
        Author: ["Author", "sans-serif"],
      },
      width: {
        "40vw": "40vw",
        "60vw": "60vw",
      },
    },
  },
  plugins: [styles],
};
