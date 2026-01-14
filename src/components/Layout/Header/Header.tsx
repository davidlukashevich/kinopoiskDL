import { useState } from "react";
import logo from "../../../assets/logo.png";
import Container from "../../ui/Container/Container";
import type { Theme } from "../../../types/TTheme";
import type { Lang } from "../../../types/TLang";
import { HeaderDesktopNav } from "./HeaderDesktopNav";
import { HeaderDesktopActions } from "./HeaderDesktopAction";
import { HeaderMobileToggle } from "./HeaderMobileToggle";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

type Props = {
  theme: Theme;
  onNavigate: (href: string) => void;
  toggleTheme: () => void;
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
};

const Header = ({ theme, onNavigate, toggleTheme, lang, onChangeLang }: Props) => {
  const [open, setOpen] = useState(false);
  const isLight = theme === "light";

  const onPickLang = (next: Lang) => onChangeLang(next);

  return (
    <header className={`py-6 ${isLight ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}>
      <Container className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            src={logo}
            alt="Kinopoisk DL"
            className="h-12 w-auto cursor-pointer"
            onClick={() => onNavigate("/")}
          />

          <HeaderDesktopNav />
        </div>

        <HeaderDesktopActions theme={theme} toggleTheme={toggleTheme} lang={lang} onPickLang={onPickLang} />

        <HeaderMobileToggle open={open} onToggle={() => setOpen((v) => !v)} />
      </Container>

      <HeaderMobileMenu
        open={open}
        theme={theme}
        lang={lang}
        onClose={() => setOpen(false)}
        onPickLang={(next) => {
          onPickLang(next);
          setOpen(false);
        }}
        toggleTheme={toggleTheme}
      />
    </header>
  );
};

export default Header