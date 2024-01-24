/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      secondary : ['Manrope' , 'sans-serif']
    },
    colors: {
      'white': "#FFF",
      'red' : '#ED1B24',
      'gray' : '#58585A',
      'light-black' : '#262626',
      'black' : '#000',
    },
  },
  plugins: [],
};
