/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'sky': "url('https://images.pexels.com/photos/97558/pexels-photo-97558.jpeg')",
    }},
  },
  plugins: [require("daisyui")],
};
