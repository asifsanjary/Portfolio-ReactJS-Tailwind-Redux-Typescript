/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'crimson-text': ['"Crimson Text"', 'serif'],
        'pacifico': ['"Pacifico"', 'cursive'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}