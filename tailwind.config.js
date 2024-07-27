/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "League-Spartan": ["League Spartan", "sans-serif"],
        "Libre-Baskerville": ["Libre Baskerville", "serif"]
      }

    },
  },
  plugins: [],
}

