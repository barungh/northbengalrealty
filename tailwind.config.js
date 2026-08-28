/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ice: '#F0F7FF',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(30,41,59,0.08)',
        card: '0 8px 30px -8px rgba(22,101,52,0.18)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
