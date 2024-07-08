/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "navW":'1200px',
      },colors:{
        'button-color':'#f3ff34'
      }
    },
  },
  plugins: [],
}

