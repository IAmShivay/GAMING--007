/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 15s linear infinite',
        'aurora': 'aurora 20s linear infinite',
        'rgb-border': 'rgb-border 2s linear infinite',
      },
      backgroundSize: {
        'gradient-x': '200% 100%',
      },
    },
  },
  plugins: [],
};