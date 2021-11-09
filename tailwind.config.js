module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        turquoise: {
          100: '#DAF9F0',
          200: '#B8F3E1',
          300: '#95EDD2',
          400: '#72E7C4',
          500: '#4FE1B5',
          600: '#28DAA5',
          700: '#1FB588',
          800: '#188E6B',
          900: '#12674D',
        },
        goldenrod: {
          100: '#FFFDFA',
          200: '#FEF5E6',
          300: '#FDE4BE',
          400: '#FCD497',
          500: '#FBC36F',
          600: '#FAB042',
          700: '#F99E16',
          800: '#DA8506',
          900: '#AE6A05',
        },
        pink: {
          100: '#FED2DA',
          200: '#FDB9C6',
          300: '#FCA1B1',
          400: '#FC889D',
          500: '#FB6F88',
          600: '#FA516F',
          700: '#F93357',
          800: '#F9163E',
          900: '#E9062F',
        },
        grey: {
          100: '#FEFEFE',
          200: '#F0F0F0',
          300: '#D4D4D4',
          400: '#B8B8B8',
          500: '#808080',
          600: '#616161',
          700: '#434343',
          800: '#242424',
          900: '#151515',
        },
        primary: {
          100: '#DAF9F0',
          700: '#1FB588',
          800: '#188E6B'
        }
      },
    },
  },
  plugins: [],
}
