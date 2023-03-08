/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url(https://images.pexels.com/photos/296234/pexels-photo-296234.jpeg?auto=compress&cs=tinysrgb&w=1600)"
      }
    },
  },
  plugins: [],
}
