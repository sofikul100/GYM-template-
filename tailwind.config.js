/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    colors:{
      'primary':'#1E1E1E',
      'element_color':'#F36100',
      'text_color':'#FFFFFF',
    },
    fontFamily:{
      oswald:'Oswald',
    },
    extend: {
       animation: {
        'ping-slow': 'ping 0.9s linear infinite',
      }
    },
  },
  plugins: []



}