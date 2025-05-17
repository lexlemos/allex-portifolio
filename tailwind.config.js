/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        dark: '#121212',
        'dark-container': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inknut Antiqua', 'serif'],
        serif: ['Inknut Antiqua', 'serif'],
      },
      borderRadius: {
        'container': '6%',
      }
    },
  },
  plugins: [],
} 