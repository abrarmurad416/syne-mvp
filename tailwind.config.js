/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik"],
        Gloria: ["Gloria Hallelujah"],
      },
      colors: {
        "base-black": "#424242",
      },
    },
  },
  plugins: [],
};
