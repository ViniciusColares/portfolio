const withPWA = require('next-pwa')
// const withImages = require('next-images')

const isProd = process.env.NODE_ENV === 'production'

const settings = {
  env: {
    underConstruction: false
  },
  devIndicators: {
    autoPrerender: false
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
}

module.exports = withPWA(settings)
