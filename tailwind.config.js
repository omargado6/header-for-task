/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/*.{html,js},"],
  theme: {
    extend: {
      screens: {
        "navW": '1200px',
        "swWidth": '998px',
      }, colors: {
        'button-color': '#f3ff34'
      }
    },
  },
  plugins: [],
}

