const size = {
  base: 0,
  mobile: "320px",
  desktopTablet: "600px",
  desktopL: "900px",
  desktopXL: "1280px",
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
