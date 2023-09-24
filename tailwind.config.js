/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "rgba(255, 255, 255, 0.7)",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        poppins: "Poppins",
        abel: "Abel",
        custom: ['Methanerse', 'sans-serif'],
      },
    },
    fontSize: {
      lg: "1.13rem",
      base: "1rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
