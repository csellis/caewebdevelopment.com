const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#2d91b2',
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
