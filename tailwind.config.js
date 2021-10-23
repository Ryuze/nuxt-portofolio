module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gradientColorStops: {
        'deep-blue': '#003049',
        'bright-red': '#d62828',
        'orange': '#f77f00',
        'light-yellow': '#fcbf49',
        'lemon': '#eae2b7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
