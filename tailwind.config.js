/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#FED202',
        iconC: '#008905',
        iconT:'#9A9CAE',
        sec :'#2F61DF',
        ton :'#008905',
        nan :'#1F435F',
        dim :'#151E1E',
        sun:'#11141D',
        white:'#FFFFFF',
        back:'#0D0E12',
        row:'#0F1014',
        bag:'#3699FF',
        far :'#F64E60'
      },
    },
  },
  plugins: [],
}