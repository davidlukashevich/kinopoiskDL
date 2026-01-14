import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeButton from "../../ui/Button/ThemeButton";
import type { Theme } from "../../../types/TTheme";
import type { Lang } from "../../../types/TLang";
import { LANGS } from "../../../constans/header.constans";

type Props = {
  open: boolean;
  theme: Theme;
  lang: Lang;
  onClose: () => void;
  onPickLang: (next: Lang) => void;
  toggleTheme: () => void;
};

export function HeaderMobileMenu({ open, theme, lang, onClose, onPickLang, toggleTheme }: Props) {
  const { t } = useTranslation();
  const isLight = theme === "light";

  if (!open) return null;

  return (
    <div
      className={`md:hidden px-6 pt-4 pb-6 text-lg space-y-4 ${
        isLight ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <nav className="flex flex-col gap-4">
        <NavLink to="/" onClick={onClose} className="flex items-center gap-2">
          <IoHomeOutline /> {t("header.home")}
        </NavLink>

        <NavLink to="/favorites" onClick={onClose} className="flex items-center gap-2">
          <IoMdHeartEmpty /> {t("header.favorites")}
        </NavLink>

        <NavLink to="/search" onClick={onClose} className="flex items-center gap-2">
          <HiMagnifyingGlass /> {t("header.search")}
        </NavLink>
      </nav>

      <div className="flex items-center justify-between gap-4 pt-4">
        <ThemeButton theme={theme} toggleTheme={toggleTheme} />

        <div className="flex gap-2">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => onPickLang(l.code)}
              className={`px-3 py-1 rounded-lg text-sm transition ${
                l.code === lang
                  ? isLight
                    ? "bg-black/10"
                    : "bg-white/20"
                  : isLight
                    ? "bg-white/60 hover:bg-white"
                    : "bg-white/10 hover:bg-white/15"
              }`}
            >
              {l.code.slice(0, 2).toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}