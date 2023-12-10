/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          purple: "#451952",
          black: "#181616",
          brown: "#662549",
        },
        light: {
          white: "#FFFBF5",
          pink: "#E2CFCF",
          purple: "#74647C",
          green: "#A4DB5E",
        },
      },
    },
  },
  plugins: [],
};
