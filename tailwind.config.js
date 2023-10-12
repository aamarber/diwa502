/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blueish':'#38c8fe',
        'light-orange': '#ffaf47',
        'orangeish': '#ff7747',
        'yellowish': '#ffd647',
        'pinkish': '#fdc1ff'
      },
      minWidth:{
        '1': '1em'
      },
      minHeight:{
        '5': '5em'
      }
    },
  },
  plugins: [],
}

