module.exports = {
  purge: {    
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './**/*.html',
     './**/*.js',
    ],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
