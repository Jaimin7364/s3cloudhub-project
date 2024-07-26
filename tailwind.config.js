const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        'm': '769px', 
        'l': '1280px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};

