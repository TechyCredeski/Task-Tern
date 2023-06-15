/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightBG: '#E3B8DE',
        darkBG: '#1e071c',
        mainCl: '#aa2ca0',
        white: '#fff',
      }
    },
  },
  plugins: [],
}

