module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sgray: '#6d818e',
        primary: '#710027',
        secondary: {
          100: '#c1cd00',
          200: '#5d6d21',
          300: '#ffc746',
          400: '#ef7e40',
          500: '#c93948',
          600: '#b1ddf1',
        },
        
      },
      fontFamily: {
        sp: ['Suedtirol Pro']
      },
      backgroundImage: theme => ({
        'st-img': "url('/src/assets/st-img-bg.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
