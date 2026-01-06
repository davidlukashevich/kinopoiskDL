import { GoGlobe } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";
import logo from '../../../assets/logo.png';
import Container from "../../ui/Container/Container";
import { NavLink } from "react-router-dom";
import type { Theme } from "../../../provider/ThemeProvider";

type Props = {
    theme: Theme
    onNavigate: (href: string) => void
    toggleTheme: () => void
}

const Header = ({theme, onNavigate, toggleTheme}: Props) => {
    return (
        <header className={`py-10 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
            <Container className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <img src={logo} alt="Kinopoisk DL" className="h-15 w-auto cursor-pointer" onClick={() => onNavigate('/')} />
                    <nav>
                        <ul className="flex gap-4 text-xl cursor-pointer">
                            <li><NavLink to={'/'} className="flex items-center gap-2"><IoHomeOutline /> Mój DL</NavLink></li>
                            <li><NavLink to={'/favorites'} className="flex items-center gap-2"><IoMdHeartEmpty /> Ulubione</NavLink></li>
                            <li><NavLink to={'/opinions'} className="flex items-center gap-2"><MdOutlineRateReview /> Recenzje</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-4 items-center text-xl">
                    <nav>
                        <ul>
                            <li><NavLink to={'/search'} className="flex items-center gap-2 cursor-pointer"><HiMagnifyingGlass /> Szukaj</NavLink></li>
                        </ul>
                    </nav>
                    <button onClick={toggleTheme} className="px-4 py-2 border rounded cursor-pointer">Tryb jasny/ciemny</button>
                    <div className="mt-1 cursor-pointer">
                        <GoGlobe />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header