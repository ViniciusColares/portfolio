const withPWA = require("next-pwa");

const settings = {
  env: {},
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
  },
};

module.exports = withPWA(settings);
