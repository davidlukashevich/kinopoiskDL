import { IoHomeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function HeaderDesktopNav() {
  const { t } = useTranslation();

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4 text-xl cursor-pointer">
        <li>
          <NavLink to="/" className="flex items-center gap-2">
            <IoHomeOutline /> {t("header.home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="flex items-center gap-2">
            <IoMdHeartEmpty /> {t("header.favorites")}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}