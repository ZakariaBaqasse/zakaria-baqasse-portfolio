/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#121e27",
        primary:"#13C2B5"
      },
      fontFamily:{
        headings:["Roboto"],
        paragraphs:["Merriweather"]
      },
      minHeight:{
        "screen-1/3":"33vh",
      },
    },
  },
  plugins: [],
}

