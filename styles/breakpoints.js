const size = {
  base: 0,
  mobile: "20em",
  desktopTablet: "37.5em",
  desktopL: "56.25em",
  desktopXL: "80em",
};

export const minDevice = {
  base: `(min-width: ${size.base})`,
  mobile: `(min-width: ${size.mobile})`,
  desktopTablet: `(min-width: ${size.desktopTablet})`,
  desktopL: `(min-width: ${size.desktopL})`,
  desktopXL: `(min-width: ${size.desktopXL})`,
};
