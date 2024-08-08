/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        YekanBakhRegular: ["YekanBakh-Regular", 'sans-serif'],
        YekanBakhBold: ["YekanBakh-Bold", 'sans-serif'],
       },
    },
  },
  plugins: [],
}

