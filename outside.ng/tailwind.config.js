/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'textColor': '#421197',
      'whiteColor': '#FFFFFF',
      'backGroundColor': '#F5F5F5',
      'purpleColor': '#651EBC',
      'grayColor': '#898CA9',
      'transparent':'transparent'
    },
    extend: {},
  },
  plugins: [],
}