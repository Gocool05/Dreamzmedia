/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://res.cloudinary.com/dx78kzenz/image/upload/v1700478066/samples/ecommerce/analog-classic.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      screens: {
        'sm': '550px', 
      },
      
      colors: {
        gold:'rgb(174,134,37);',
       gray:{
        lite:'#e5e5e5',
        mid:'#464646',
        normal:'#141414',
        dark:'#212121'
       }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

