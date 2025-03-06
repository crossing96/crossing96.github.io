module.exports = {
  content: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./layouts/**/*.html",
    "./assets/**/*.js",
    "./themes/digitalgarden2/content/**/*.md",
    "./themes/digitalgarden2/content/**/*.html",
    "./themes/digitalgarden2/layouts/**/*.html",
    "./themes/digitalgarden2/assets/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
