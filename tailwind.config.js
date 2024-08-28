/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      ms: "43.75rem", //700px
      mm: "48.375rem",
      md: "76.25rem",
      lg: "62.5rem",
      xl: "87.5rem",
      xxl: "106.25rem",
    },
  },
  plugins: [],
};
