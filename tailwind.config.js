/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ClashDisplay-Regular", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        tomato: "#ES0914",
        marigold: "#ffbe0b",
      },
    },
  },
  plugins: [],
};
