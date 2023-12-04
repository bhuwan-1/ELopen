/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/*.{html,js}"
  ],
  theme: {
    extend: {
      height: {
        '243': '243px',
        '520' : '425px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
}
}

