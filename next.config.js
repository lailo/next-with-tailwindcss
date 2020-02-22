const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'mdx'],
})
