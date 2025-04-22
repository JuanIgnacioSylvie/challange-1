// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        blue: {
          50: '#e6f8fe',
          100: '#b0e9fb',
          200: '#8adff9',
          300: '#54d0f6',
          400: '#33c7f4',
          500: '#00b9f1',
          600: '#00a8db',
          700: '#0083ab',
          800: '#006685',
          900: '#004e65',
        },
      },
    },
  },
  plugins: [],
}
