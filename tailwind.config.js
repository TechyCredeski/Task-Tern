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
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
      pacifico: ['Pacifico', 'cursive'],
    },
    extend: {
      colors: {
        lightBG: '#E3B8DE',
        darkBG: '#1e071c',
        mainCl: '#aa2ca0',
        white: '#fff',
      },
      backgroundImage: {
        ctaSection:" url('/src/asset/images/blob-bg.svg')"
      }
      },
  },


  plugins: [
  ],
}

