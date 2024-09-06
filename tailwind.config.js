/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{html,jsx}", "./src/**/*.{html,jsx}", "./index.html",],
  theme: {
    extend: {
      colors: {
        "blue": "#265c58",
        "black": "#0d2b29",
        "white": "#ffffff",
        "gold": "#fff"
      }
    },
  },
  plugins: [],
}

