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


tailwind.config = {
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                card: '#1a1a1a',
                cardHover: '#242424',
                primary: '#5b7bf5',
                secondary: '#8b5cf6',
                accent: '#a855f7',
                muted: '#2a2a2a',
                textPrimary: '#ffffff',
                textSecondary: '#9ca3af',
            }
        }
    }
}