/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#030712',
        customGreen: '#37715d',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // ✅ Added Montserrat
      },
    },
  },
};
