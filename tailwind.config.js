/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#0a0a0a',
      gray: {
        400: '#b3b3b3',
        500: '#a7a7a7',
        600: '#727272',
        800: '#292929',
        900: '#181818',
      },
      green: '#1ed760',
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
  },
  plugins: [],
};
