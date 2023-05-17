/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
