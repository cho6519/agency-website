/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1120',
          navy: '#0F172A',
          slate: '#1E293B',
          muted: '#334155',
          border: 'rgba(51, 65, 85, 0.4)',
          blue: '#2563EB',
          blueHover: '#1D4ED8',
          blueLight: '#3B82F6',
          emerald: '#10B981',
          emeraldLight: '#34D399',
        },
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(37, 99, 235, 0.35)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(37, 99, 235, 0.25), 0 0 0 1px rgba(37, 99, 235, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
