module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      header: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
    borderColor: [
      'dark',
      'dark-focus-within',
      'responsive',
      'hover',
      'focus',
      'focus-within',
    ],
    borderWidth: ['dark', 'responsive'],
    textColor: ['dark', 'responsive', 'hover', 'focus'],
  },
  corePlugins: {},
  plugins: [require('tailwindcss-dark-mode')()],
}
