/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue', './presets/**/*.{js,vue,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#BD5D38',
        secondary: '#868e96',
        text: '#868E96',
        grey: '#343a40',
        'light-grey': '#C9C9C9',
      },
    },
  },
  plugins: [],
}
