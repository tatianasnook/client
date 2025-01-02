/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#0A192F",
        "secondary" : "orange",
        "tertiary" : "green"
      }
    },
  },
  plugins: [],
}
