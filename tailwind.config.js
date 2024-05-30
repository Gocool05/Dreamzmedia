/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {    
      colors: {
        gold: 'rgb(174, 134, 37)',
        gray: {
          lite: '#e5e5e5',
          mid: '#464646',
          normal: '#141414',
          dark: '#212121'
        }
      },
    },
  },
};
