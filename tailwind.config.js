/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "prime-orange": "#fd9d04",
        "prime-blue": "#0b407c",
      }
    },
  },
  plugins: [],
}

