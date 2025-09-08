/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // toggle via class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};