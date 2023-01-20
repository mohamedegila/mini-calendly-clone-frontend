/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'info-color': '#0b3558',
        'danger' : '#f87171',
        'success': '#84cc16'
      },
    },
  },
  plugins: [],
}
