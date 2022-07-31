/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
theme: {
  extend: {
    colors:{
        brand:{
          300: '#9966DFF',
          500: '#8257e6',

        }
    },
    borderRadius:{
      md:'4px',
    }

  },
},
plugins: [
  require('@tailwindcss/forms'),
  require('tailwind-scrollbar'),
],
}
