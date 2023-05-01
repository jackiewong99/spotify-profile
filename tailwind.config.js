/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: {
        100: '#ffffff',
        200: '#cccccc',
      },
      black: '#191414',
      gray: {
        400: '#b3b3b3',
        500: '#a7a7a7',
        600: '#727272',
        800: '#292929',
        900: '#181818',
      },
      green: {
        500: '#1ed760',
        600: '#1db954',
        700: '#139140',
      },
      red: {
        500: '#f15e6c',
        600: '#e91429',
      },
      blue: {
        500: '#3d91f4',
        600: '#0d72ea',
      },
      orange: '#ffa42b',
    },
    extend: {
      fontFamily: {
        circular: ['Circular Std', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
