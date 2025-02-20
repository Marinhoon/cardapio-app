/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      'sans': ['Roboto','sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/public/assets/bg.png')"
      }
    },
  },
  plugins: [],
};
