const size = {
  base: 0,
  mobile: "32em",
  desktopTablet: "60em",
  desktopL: "90em",
  desktopXL: "128em",
};

export const minDevice = {
  base: `(min-width: ${size.base})`,
  mobile: `(min-width: ${size.mobile})`,
  desktopTablet: `(min-width: ${size.desktopTablet})`,
  desktopL: `(min-width: ${size.desktopL})`,
  desktopXL: `(min-width: ${size.desktopXL})`,
};

export const maxDevice = {
  mobile: `(max-width: ${size.mobile})`,
  desktopTablet: `(max-width: ${size.desktopTablet})`,
  desktopL: `(max-width: ${size.desktopL})`,
  desktopXL: `(max-width: ${size.desktopXL})`,
};
