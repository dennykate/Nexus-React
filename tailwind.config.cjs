/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0158CC",
        secondary: "#F1F3F4",
        tertiary: "#14133B",
      },
    },
  },
  plugins: [],
};
