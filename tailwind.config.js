/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 
          "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
    },
    gridTemplateColumns: {'70/30': '70% 28%'},
  },
  plugins: [],
 }
}