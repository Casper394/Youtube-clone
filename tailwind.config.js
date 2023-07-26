/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ['./build/*.html']
  },
  theme: {
    extend: {
      colors: {
        primaryDark: '#0f0f0f',
        secondaryDark: '#222222',
        borderColor: 'rgb(42,42,42)'
      },
    }
  },
  plugins: [],
}

