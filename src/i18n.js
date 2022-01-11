import { use } from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";

const i18n = use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "pl",
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
