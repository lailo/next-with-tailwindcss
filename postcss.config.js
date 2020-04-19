module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
              defaultExtractor: (content) =>
                content.match(/[A-Za-z0-9-_:/]+/g) || [],
              whitelist: ['html', 'body', 'dark-mode'],
            },
          ],
        ]
      : []),
    'postcss-preset-env',
  ],
}
