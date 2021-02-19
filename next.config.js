// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

const settings = {
  devIndicators: {
    autoPrerender: false
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
}

module.exports = withPWA(settings)
