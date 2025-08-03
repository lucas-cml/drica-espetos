/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg-color.png')"
      }
    },
  },
  plugins: [],
}

