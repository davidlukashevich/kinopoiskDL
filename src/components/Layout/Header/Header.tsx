import { useState } from "react";
import { GoGlobe } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoClose, IoHomeOutline, IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';
import ThemeButton from "../../ui/Button/ThemeButton";
import Container from "../../ui/Container/Container";
import type { Theme } from "../../../types/TTheme";

type Props = {
    theme: Theme
    onNavigate: (href: string) => void
    toggleTheme: () => void
}

const Header = ({ theme, onNavigate, toggleTheme }: Props) => {
    const [open, setOpen] = useState(false)
    const isLight = theme === "light"

    return (
        <header className={`py-6 ${isLight ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
            <Container className="flex justify-between items-center">

                <div className="flex gap-4 items-center">
                    <img
                        src={logo}
                        alt="Kinopoisk DL"
                        className="h-12 w-auto cursor-pointer"
                        onClick={() => onNavigate('/')}
                    />

                    <nav className="hidden md:block">
                        <ul className="flex gap-4 text-xl cursor-pointer">
                            <li><NavLink to="/" className="flex items-center gap-2"><IoHomeOutline /> Mój DL</NavLink></li>
                            <li><NavLink to="/favorites" className="flex items-center gap-2"><IoMdHeartEmpty /> Ulubione</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="hidden md:flex gap-4 items-center text-xl">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/search" className="flex items-center gap-2 cursor-pointer">
                                    <HiMagnifyingGlass /> Szukaj
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />

                    <div className="mt-1 cursor-pointer">
                        <GoGlobe />
                    </div>
                </div>

                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <IoClose /> : <IoMenu />}
                </button>
            </Container>

            {open && (
                <div className={`md:hidden px-6 pt-4 pb-6 text-lg space-y-4 ${isLight ? "bg-gray-100" : "bg-gray-900"}`}>
                    <nav className="flex flex-col gap-4">
                        <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-2"><IoHomeOutline /> Mój DL</NavLink>
                        <NavLink to="/favorites" onClick={() => setOpen(false)} className="flex items-center gap-2"><IoMdHeartEmpty /> Ulubione</NavLink>
                        <NavLink to="/search" onClick={() => setOpen(false)} className="flex items-center gap-2"><HiMagnifyingGlass /> Szukaj</NavLink>
                    </nav>

                    <div className="flex items-center gap-4 pt-4">
                        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                        <GoGlobe className="text-2xl cursor-pointer" />
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header