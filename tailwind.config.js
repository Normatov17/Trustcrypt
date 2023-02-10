/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        1340: '1340px',
        576: '576px',
        555: '555px',
      },

      colors: {
        brands: {
          ochyashil: '#0FAE96'
        }
      },

      fontFamily: {
        inter: 'Inter'
      }
    },
  },
  plugins: [],
}
