import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./locales/pl.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      "pl-PL": { translation: pl },
      "en-US": { translation: en },
      "ru-RU": { translation: ru }
    },
    lng: "pl-PL",
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;