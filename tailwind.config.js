module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
        sans: ['"Barlow Condensed"', 'Archivo', 'sans-serif']
    },
    extend: {
      colors: {
        'red': '#d73f3f',
        'red-light': '#ffeded',
        'orange': '#faa71e',
        'blue-dark': '#2c3038',
        'blue-light': '#929db3',
        'blue-grey': '#68707f',
        'grey-light': '#e1e0e0',
        'tan': '#f0efef', 
        'white': '#fff'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
