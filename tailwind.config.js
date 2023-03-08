/** @type {import('tailwindcss').Config} */
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
      },
    },
  },
  plugins: [],
};
