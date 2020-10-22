const withPWA = require("next-pwa");
const withImages = require("next-images");

const settings = {
  env: {
    underConstruction: true,
  },
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
  },
};

module.exports =
  process.env.NODE_ENV === "development"
    ? withImages(settings)
    : withImages(withPWA(settings));
