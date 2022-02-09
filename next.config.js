const withTM = require("next-transpile-modules")([
  "react-leaflet",
  "@react-leaflet/core",
]);
const withImages = require("next-images");
const path = require("path");

module.exports = withImages(
  withTM({
    future: {
      webpack5: false,
    },
    i18n: {
      locales: ["pl"],
      defaultLocale: "pl",
    },
    images: {
      domains: ["localhost:3000"],
      // exclude: path.resolve(__dirname, "public/assets/img/icons"),
    },
    webpack(config, options) {
      return config;
    },
  })
);
