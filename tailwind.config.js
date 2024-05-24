const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    flowbite.content(),
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutralSilver": "#F5F7FA",
        "neutralDGrey": "#4D4D4D",
        "neutralGrey": "#717171",
        "brandPrimary": "#4CAF4F",
        "brandSecondary": "#263238"

      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}