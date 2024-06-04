/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
    colors: {
      myBlue: "#5863F8",
      myBlack: "171D1C",
    },
    backgroundImage: {
      "hero-background": "url('./src/img/image 9.png')",
    },
  },
  plugins: [],
};
