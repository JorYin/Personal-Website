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
      },
      backgroundColor: {
        "main": "#edede9",
        "primary": "#2b2d42",
        "secondary": "#afbed7",
        "accent": "#fca311"
      },
      textColor: {
        "main-color": "#2b2d42",
        "second-color": "#edede9"
      }

    },
  },
  plugins: [],
}

