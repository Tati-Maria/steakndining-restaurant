/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        "hero": "linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(./src/images/hero.jpg)",
        "burger": "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(./src/images/burger.jpg)",
        "chicken": "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(./src/images/chicken.jpg)",
        "meat": "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(./src/images/meat.jpg)",
        "drink": "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(./src/images/drink.jpg)",
      }
    },
  },
  plugins: [],
}
