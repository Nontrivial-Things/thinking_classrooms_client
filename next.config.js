const withTM = require("next-transpile-modules")([
  "react-leaflet",
  "@react-leaflet/core",
]);

module.exports = withTM({
  future: {
    webpack5: true,
  },
});

module.exports = {
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
};
const withImages = require("next-images");
module.exports = withImages({
  webpack: (config) => {
    return config;
  },
});
