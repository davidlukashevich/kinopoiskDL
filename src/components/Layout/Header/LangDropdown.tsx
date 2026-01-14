import { useEffect, useId, useRef, useState } from "react";
import { GoGlobe } from "react-icons/go";
import { useTranslation } from "react-i18next";
import type { Theme } from "../../../types/TTheme";
import type { Lang } from "../../../types/TLang";
import { LANGS } from "../../../constans/header.constans";

type Props = {
  theme: Theme;
  lang: Lang;
  onPickLang: (next: Lang) => void;
};

export function LangDropdown({ theme, lang, onPickLang }: Props) {
  const { t } = useTranslation();

  const [langOpen, setLangOpen] = useState(false);
  const dropdownId = useId();

  const langBtnRef = useRef<HTMLButtonElement | null>(null);
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  const isLight = theme === "light";

  const dropdownBg = isLight
    ? "bg-white text-gray-900 border-gray-200"
    : "bg-gray-800 text-gray-100 border-gray-700";
  const dropdownHover = isLight ? "hover:bg-gray-100" : "hover:bg-gray-700";

  const currentLang = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const tNode = e.target as Node;
      if (!langOpen) return;
      if (langBtnRef.current?.contains(tNode)) return;
      if (langMenuRef.current?.contains(tNode)) return;
      setLangOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [langOpen]);

  const pickLang = (next: Lang) => {
    onPickLang(next);
    setLangOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={langBtnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={langOpen}
        aria-controls={dropdownId}
        onClick={() => setLangOpen((v) => !v)}
        className={`mt-1 inline-flex items-center gap-2 rounded-xl px-3 py-2 transition cursor-pointer ${
          isLight ? "hover:bg-white/70" : "hover:bg-white/10"
        }`}
      >
        <GoGlobe className="text-2xl" />
        <span className="text-sm font-medium opacity-80">
          {currentLang.code.slice(0, 2).toUpperCase()}
        </span>
      </button>

      {langOpen && (
        <div
          ref={langMenuRef}
          id={dropdownId}
          role="menu"
          className={`absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border shadow-lg z-50 ${dropdownBg}`}
        >
          <div className={`px-4 py-3 text-sm ${isLight ? "text-gray-600" : "text-gray-300"}`}>
            {t("header.chooseLanguage")}
          </div>

          <div className="p-2">
            {LANGS.map((l) => {
              const active = l.code === lang;
              return (
                <button
                  key={l.code}
                  role="menuitem"
                  type="button"
                  onClick={() => pickLang(l.code)}
                  className={`w-full rounded-xl px-3 py-2 text-left transition cursor-pointer ${dropdownHover} ${
                    active ? (isLight ? "bg-gray-100" : "bg-gray-700") : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-semibold">{l.native}</span>
                    </div>

                    {active && (
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-semibold ${
                          isLight ? "bg-black/10 text-gray-800" : "bg-white/15 text-gray-100"
                        }`}
                      >
                        Active
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}