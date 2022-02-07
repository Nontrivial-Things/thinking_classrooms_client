const withTM = require("next-transpile-modules")([
  "react-leaflet",
  "@react-leaflet/core",
]);
const withImages = require("next-images");

module.exports = withImages(
  withTM({
    future: {
      webpack5: true,
    },
    i18n: {
      locales: ["pl"],
      defaultLocale: "pl",
    },
    images: {
      domains: ["localhost:3000"],
    },
    webpack(config, options) {
      return config;
    },
  })
);
