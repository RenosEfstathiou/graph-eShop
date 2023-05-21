/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,tsx}",
    "node_modules/react-daisyui/dist/**/*.js",
    "node_modules/daisyui/dist/**/*.js",
  ],
  plugins: [require("daisyui")],

  theme: {
    extend: {},
  },
};
