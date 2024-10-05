/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xs: ["8px", "9px"],
        sm: ["10px", "12px"],
        base: ["12px", "14px"],
        lg: ["14px", "16px"],
        xl: ["16px", "19px"],
        "2xl": ["20px", "23px"],
        "3xl": ["24px", "28px"],
        "4xl": ["32px", "38px"],
        "5xl": ["36px", "42px"],
        "6xl": ["40px", "47px"],
        "7xl": ["48px", "56px"],
        "8xl": ["64px", "75px"],
      },
      textShadow: {
        white: "0px 0px 4px rgba(255, 255, 255, .5)",
      },
    },
    colors: {
      electricBlue: "#007BFF",
      darkElectricBlue: "#0A62BF",
      lightGray: "#E0E0E0",
      darkGray: "#262626",
      darkDarkGray: "#0A0A0A",
      black: "#000000",
      white: "#FFFFFF",
      transparent: 'rgba(0, 0, 0, 0)'
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require('tailwind-scrollbar')
  ],
};
