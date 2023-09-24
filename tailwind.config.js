/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./index.html",
  ],
  theme: {
    extend: {
      letterSpacing: {
        '1': '0.1em', 
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '8rem',
      },
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
      "meth": ['methanerse', 'sans-serif'],
    },
    fontSize:{
      '12xl':'10rem'
    },
    padding: {
      '10': '2.5rem',
      '20': '5rem', 
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      xxl: "2000px",
      xxxl: "2560px",
    },
   
  },
},
  variants: {},
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}





