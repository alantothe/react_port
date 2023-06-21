/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aboreto': "'Aboreto'",
        'josefin': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        lightyellow: 'rgb(255,255,231)',
        coolgrey: 'rgb(48,48,48)'
      }
    },
  },
  plugins: [],
}
