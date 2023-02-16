/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f752ae",
        secondary: "#c23c85",
        success: "#3CB371",
        danger: "#DC143C",
        warning: "#FFD700",
        info: "#00BFFF",
        light: "#F0F8FF",
        dark: "#000000",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
