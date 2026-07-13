/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#040610",
        brandBlue: "#0ea5e9",
        brandViolet: "#a855f7",
        brandGreen: "#10b981",
        brandAmber: "#f59e0b",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        mono: ["Fira Code", "monospace"]
      }
    }
  },
  plugins: [],
}
