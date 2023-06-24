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
      'backGroundColor': 'rgb(240, 239, 239)',
      'purpleColor': '#651EBC',
      'grayColor': '#898CA9',
      'greyColor':'#A39F9F',
      'transparent': 'transparent',
      'blackColor': '#000000',
      'aquaColor': '#83E7FE',
      'goldColor': '#FBBC05',
      'royalBlue': '#1E5FD7',
      'blueColor':'#3D81FF',
      'modalBG': 'rgba(0, 0, 0,0.4)',
      'lightPurple': 'rgb(216, 182, 248)',
      'offWhite': '#F1F3F8',
      'blurryPurple':'#EEEAF2'
      
    },
  },
  plugins: [],
}
