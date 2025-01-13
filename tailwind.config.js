/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
        aspectRatio: {
            '1': '1',
          },
          scale: {
            '105': '1.05',
          },
      fontFamily: {
        ginger: ['Ginger', 'sans-serif']
      },
      colors: {
        primary: '#1544c0'
      }
    },
  },
  plugins: [],
}