/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{hbs,js,html}"],
  theme: {
    extend: {
      backgroundColor: {
        "rgba-gray": "rgba(155, 155, 155, 0.6)", // Por ejemplo, rojo con 50% de opacidad
      },
    },
  },
  variants: {},
  plugins: [require("flowbite/plugin")],
};



