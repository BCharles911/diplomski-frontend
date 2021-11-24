module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dashlane: {
          DEFAULT: '#0E6476',
          '50': '#51D0EA',
          '100': '#3FCBE8',
          '200': '#1BC1E3',
          '300': '#17A2BF',
          '400': '#12839A',
          '500': '#0E6476',
          '600': '#083944',
          '700': '#020F12',
          '800': '#000000',
          '900': '#000000'
        },
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
}
