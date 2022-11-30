/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    minHeight: {
      '300': '300px',
    },
    maxWidth: {
      '480': '480px',
    },
    minWidth: {
      '480': '480px',
    },
    screens: {
      sm: '480px',
      md: '885px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      width: {
        '480': '480px',
      }
    },
  },
  plugins: [],
}