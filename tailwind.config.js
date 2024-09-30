/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      electricBlue: "#007BFF",
      darkElectricBlue: "#0A62BF",
      dightGray: "#E0E0E0",
      darkGray: "#262626",
      darkDarkGray: "#0A0A0A",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
