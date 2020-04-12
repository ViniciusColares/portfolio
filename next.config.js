const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    user: 'my-value',
  },
})
