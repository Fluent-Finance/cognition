module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
     ...(process.env.NODE_ENV !== 'development' ? { 'cssnano': {} } : {})
  }
}
