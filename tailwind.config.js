/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        1340: '1340px'
      },

      colors: {
        brands: {
          ochyashil: '#0FAE96'
        }
      }
    },
  },
  plugins: [],
}
