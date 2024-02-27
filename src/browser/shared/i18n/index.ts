import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./resources/en.js";
import zh_CN from "./resources/zh-CN.js";

const resources = {
  en,
  "zh-CN": zh_CN,
};

export function initI18n() {
  i18n
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: "en",
      resources,

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });
}

export default i18n;
