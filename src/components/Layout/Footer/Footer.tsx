import Container from "../../ui/Container/Container"
import logo from '../../../assets/logo.png'
import type { Theme } from "../../../types/TTheme"

type Props = {
    theme: Theme
}

const Footer = ({ theme }: Props) => {
    const isLight = theme === 'light'
    return (
        <footer className={`py-10 ${isLight ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
            <Container>
                <div className="flex justify-center items-center gap-3 mb-2">
                    <img src={logo} alt="Kinopoisk DL" className="h-12 w-auto" />
                    <span className="text-2xl font-medium">Kinopoisk DL</span>
                </div>
                <p className="text-center">© 2025 Kinopoisk DL. Wszystkie prawa zastrzeżone.</p>
                <p className="text-center mt-2">Kinopoisk DL — Twój przewodnik po świecie kina</p>
            </Container>
        </footer>
    )
}

export default Footer