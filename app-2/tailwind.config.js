/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Geist", "Geist Fallback"],
        mono: ["var(--font-mono)", "Geist Mono", "Geist Mono Fallback"],
      },
    },
  },
  plugins: [],
};
