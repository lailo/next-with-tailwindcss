const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelist: ['html', 'body'],
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
