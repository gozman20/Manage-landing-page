/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}"],
  theme: {
    
 
    extend: {
      colors:{
        myorange: '#ff9966',
        dimBlack:' #b3b3cc',
        dimBlue:'#f2e6ff',
        darkBlack:'hsl(0, 100%, 3%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        brightRed: 'hsl(12, 88%, 59%)',
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  },
  plugins: [],
}