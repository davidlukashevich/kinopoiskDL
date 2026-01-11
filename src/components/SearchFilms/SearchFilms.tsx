import type { NavigateFunction } from "react-router-dom"
import type { FilmsResponse } from "../../types/TFilms"
import type { Theme } from "../../types/TTheme"
import FilmCardContainer from "../FilmCard/FilmCardContainer"

type Props = {
  query: string
  searchFilms: FilmsResponse | null
  theme: Theme
  setQuery: (value: string) => void
  navigate: NavigateFunction
}

const SearchFilms = ({ query, searchFilms, theme, setQuery, navigate }: Props) => {
  const isLight = theme === "light"

  return (
    <div className="w-full py-5">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
        Wyszukaj film
      </h1>

      <form className="mb-10 flex justify-center md:justify-start">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Wpisz tytuł filmu..."
          className={`
            w-full max-w-[700px] md:w-700 px-4 py-3 rounded-lg bg-white/10 border outline-none
            ${
              isLight
                ? "text-black placeholder-gray-500 border-black/20 focus:border-black/40"
                : "text-white placeholder-gray-300 border-white/20 focus:border-white/40"
            }
          `}
        />
      </form>

      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {searchFilms?.results.map((film) => (
          <FilmCardContainer
            key={film.id}
            id={film.id}
            title={film.title}
            img={film.poster_path}
            navigate={navigate}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchFilms