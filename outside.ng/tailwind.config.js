/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'textColor': '#421197',
      'whiteColor': '#FFFFFF',
      'backGroundColor': '#F5F5F5',
      'purpleColor': '#651EBC',
      'grayColor': '#898CA9',
      'greyColor':'#A39F9F',
      'transparent': 'transparent',
      'blackColor': '#000000',
      'aquaColor': '#83E7FE',
      'goldColor': '#FBBC05',
      'royalBlue': '#1E5FD7',
      'modalBG':'rgba(0, 0, 0,0.4)'
    },
  },
  plugins: [],
}
