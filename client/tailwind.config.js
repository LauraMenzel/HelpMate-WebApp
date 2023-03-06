/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobil': {'raw': '306px'},
      },
      fontFamily: {
        display: ["Oxygen", "sans - serif"],
      },
    },
  },
  plugins: [],
};
