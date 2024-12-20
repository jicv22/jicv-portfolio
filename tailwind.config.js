/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      textShadow: {
        white: "0px 0px 4px rgba(255, 255, 255, .5)",
      },
      colors: {
        electricBlue: "#007BFF",
        darkElectricBlue: "#0A62BF",
        lightGray: "#E0E0E0",
        darkGray: "#262626",
        darkDarkGray: "#0A0A0A",
        black: "#000000",
        white: "#FFFFFF",
        transparent: "rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow"), require("tailwind-scrollbar")],
};
