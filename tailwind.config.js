/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        orange: "hsl(39, 100%, 50%)",
        darkgrayishred: "hsl(0, 1.04%, 37.65%)",
        americanorange: "hsl(32, 100%, 49%)",
        cultured: "hsl(0, 0%, 96%)",
        gainsboro: "hsl(0, 0%, 86%)",
        darkshade: "hsl(210, 10%, 15.69%)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        gallient: ["Gallient"],
      },
    },
  },
  plugins: [],
};
