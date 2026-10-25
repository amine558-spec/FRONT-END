/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        lime: '#c9f31d',
        ink: '#151714',
        deep: '#0d0f0d',
        cream: '#f0efe9',
        stone: '#deddd6',
        mute: '#7e8179',
      },
      fontFamily: {
        display: ['Oswald', 'Impact', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
