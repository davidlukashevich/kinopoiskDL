import Container from "../../ui/Container/Container";
import logo from "../../../assets/logo.png";
import type { Theme } from "../../../types/TTheme";
import { useTranslation } from "react-i18next";

type Props = {
  theme: Theme;
};

const Footer = ({ theme }: Props) => {
  const { t } = useTranslation();
  const isLight = theme === "light";

  return (
    <footer className={`py-10 ${isLight ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}>
      <Container>
        <div className="flex justify-center items-center gap-3 mb-2">
          <img src={logo} alt="Kinopoisk DL" className="h-12 w-auto" />
          <span className="text-2xl font-medium">Kinopoisk DL</span>
        </div>
        <p className="text-center">{t("footer.rights")}</p>
        <p className="text-center mt-2">{t("footer.tagline")}</p>
      </Container>
    </footer>
  );
};

export default Footer;