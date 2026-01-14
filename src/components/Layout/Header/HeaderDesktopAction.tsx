import { HiMagnifyingGlass } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeButton from "../../ui/Button/ThemeButton";
import type { Theme } from "../../../types/TTheme";
import type { Lang } from "../../../types/TLang";
import { LangDropdown } from "./LangDropdown";


type Props = {
  theme: Theme;
  toggleTheme: () => void;
  lang: Lang;
  onPickLang: (next: Lang) => void;
};

export function HeaderDesktopActions({ theme, toggleTheme, lang, onPickLang }: Props) {
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex gap-4 items-center text-xl">
      <NavLink to="/search" className="flex items-center gap-2 cursor-pointer">
        <HiMagnifyingGlass /> {t("header.search")}
      </NavLink>

      <ThemeButton theme={theme} toggleTheme={toggleTheme} />

      <LangDropdown theme={theme} lang={lang} onPickLang={onPickLang} />
    </div>
  )
}