/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        middle: "0 0px 5px 1px",
      },
      screens: {
      },
      colors: {
        primary: "#19140F",
        secondary: "#6F6A64",
        accent: "00FFFF",
        _red: "#F5B7B7",
        _purple: "#9090e3",
        // _purple: "#4e4eb5",
        _white: "#f1f1f1",
        
        brown: "#d9af82",
        brown_hover: "#ce8433",
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}