import type { Theme } from "../../../types/TTheme"

type Props = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeButton = ({ theme, toggleTheme }: Props) => {
    const isLight = theme === "light"

    return (
        <button
            onClick={toggleTheme}
            className={`relative w-10 h-10 flex items-center justify-center rounded-full border cursor-pointer transition-all duration-300
                ${isLight ? "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300" : "bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700"}`}
        >
            <span className={`absolute top-0.75 transition-all duration-300 ${isLight ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>☀️</span>
            <span className={`absolute top-0.75 transition-all duration-300 ${isLight ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>🌕</span>
        </button>
    )
}

export default ThemeButton