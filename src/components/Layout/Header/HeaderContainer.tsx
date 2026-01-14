import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../provider/ThemeProvider";
import Header from "./Header";
import i18n from "../../../i18n";
import type { Lang } from "../../../types/TLang";

const HeaderContainer = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [lang, setLang] = useState<Lang>((i18n.resolvedLanguage || i18n.language) as Lang);

  useEffect(() => {
    const onLangChanged = (lng: string) => setLang(lng as Lang);
    i18n.on("languageChanged", onLangChanged);
    return () => {
      i18n.off("languageChanged", onLangChanged);
    };
  }, []);

  const handleChangeLang = (next: Lang) => {
    i18n.changeLanguage(next);
  };

  return (
    <Header
      theme={theme}
      onNavigate={(href: string) => navigate(href)}
      toggleTheme={toggleTheme}
      lang={lang}
      onChangeLang={handleChangeLang}
    />
  );
};

export default HeaderContainer;