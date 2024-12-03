/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey:{
          100:"#7f95ac"
        },
        blue:{
          500:"#183f6a",
          700:"#002a5a"
        },
        green:{
          500:"#3ad2c6"
        },
        white:{
          200:"#f8f9fa"
        }
      }
    },
  },
  plugins: [],
}

