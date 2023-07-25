/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ['./build/*.html']
  },
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
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

