/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{hbs,js,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

