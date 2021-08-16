import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./localization/en/translationEN.json";
import translationTR from "./localization/tr/translationTR.json";

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;