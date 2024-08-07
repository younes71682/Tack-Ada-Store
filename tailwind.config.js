/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        YekanBakhRegular: ["YekanBakh-Regular", 'sans-serif'],
        YekanBakhMedium: ["YekanBakh-Medium", 'sans-serif'],
        YekanBakhLight: ["YekanBakh-Light", 'sans-serif'],
        YekanBakhHeavy: ["YekanBakh-Heavy", 'sans-serif'],
        YekanBakhHairline: ["YekanBakh-Hairline", 'sans-serif'],
        YekanBakhBold: ["YekanBakh-Bold", 'sans-serif'],
        YekanBakhFat: ["YekanBakh-Fat", 'sans-serif'],
        Byekan: ["B-yekan", "arial"]
      },
    },
  },
  plugins: [],
}

