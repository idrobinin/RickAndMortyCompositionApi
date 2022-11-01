/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'xl':{'max': '992px'},
      'lg':{'max': '892px'},
      'md':{'max': '768px'},
      'sm':{'max': '650px'},
      'xs':{'max': '480px'},
      'xxs':{'max': '380px'},
    },
    container:{
      padding:'25px',
      center:true
    },
    extend: {
      colors: {
        'content-bg': '#202329',
        'card-bg': '#3c3e44',
      },
      backgroundImage: {
        'header-bg': "url('@/assets/images/header-bg.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}