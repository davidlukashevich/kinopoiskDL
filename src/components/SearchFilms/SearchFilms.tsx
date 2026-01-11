import type { NavigateFunction } from "react-router-dom"
import type { FilmsResponse } from "../../types/TFilms"
import FilmCard from "../FilmCard/FilmCard"
import type { Theme } from "../../provider/ThemeProvider"

type Props = {
    query: string
    searchFilms: FilmsResponse | null
    theme: Theme
    setQuery: (value: string) => void
    navigate: NavigateFunction
}

const SearchFilms = ({query, searchFilms, theme, setQuery, navigate}: Props) => {
    return (
        <div className="w-full py-5">
            <h1 className="text-2xl font-bold mb-6">Wyszukaj film</h1>

            <form className="mb-10">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Wpisz tytuł filmu..."
                    className={`w-300 px-4 py-3 rounded-lg bg-white/10 border outline-none ${theme === 'light' ? 'text-black placeholder-gray-500 border-black/20 focus:border-black/40' : 'text-white placeholder-gray-300 border-white/20 focus:border-white/40'}`}
                />
            </form>

            <div className="flex flex-wrap gap-6">
                {searchFilms?.results.map((film) => (<FilmCard key={film.id} id={film.id} title={film.title} img={film.poster_path} navigate={navigate} />))}
            </div>
        </div>
    )
}

export default SearchFilms