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
        'mine-shaft': {
          DEFAULT: '#303030',
          '50': '#8C8C8C',
          '100': '#828282',
          '200': '#6D6D6D',
          '300': '#595959',
          '400': '#444444',
          '500': '#303030',
          '600': '#141414',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'mandy': {
          DEFAULT: '#EA4B64',
          '50': '#FDEFF2',
          '100': '#FBDDE2',
          '200': '#F7B9C2',
          '300': '#F394A3',
          '400': '#EE7083',
          '500': '#EA4B64',
          '600': '#E21A3A',
          '700': '#B0152D',
          '800': '#7E0F20',
          '900': '#4C0913'
        },
      },


    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@themesberg/flowbite/plugin')
  ],
}
