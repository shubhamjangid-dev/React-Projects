/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "500px",
      // => @media (min-width: 576px) { ... }

      md: "760px",
      // => @media (min-width: 960px) { ... }

      lg: "1040px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
