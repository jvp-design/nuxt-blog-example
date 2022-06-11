const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["uncut-sans", ...defaultTheme.fontFamily.sans],
        serif: ["sprat", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
