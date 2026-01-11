import type { NavigateFunction } from "react-router-dom"
import type { TFilmDetails } from "../../types/TFilms"
import FilmCardContainer from "../FilmCard/FilmCardContainer"

type Props = {
  filmDetails: TFilmDetails
  watchTrailer: (title: string, date: string) => void
  navigate: NavigateFunction
}

const FilmDetails = ({ filmDetails, watchTrailer, navigate }: Props) => {
  const imgBase = "https://image.tmdb.org/t/p/original"

  return (
    <div className="w-full my-5">
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imgBase}${filmDetails.backdrop_path})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div
        className="
          max-w-6xl mx-auto px-4 sm:px-6
          -mt-32 sm:-mt-40
          relative z-10
          flex flex-col md:flex-row gap-10
        "
      >
        <div className="mx-auto md:mx-0">
          <FilmCardContainer
            id={filmDetails.id}
            title={filmDetails.title}
            img={filmDetails.poster_path}
            navigate={navigate}
            watchTrailer={(title, date) => watchTrailer(title, (date ?? filmDetails.release_date))}
            releaseDate={filmDetails.release_date}
            className="w-[200px] sm:w-[250px] md:w-[300px]"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {filmDetails.title}
          </h1>

          {filmDetails.tagline && (
            <p className="text-lg sm:text-xl italic mt-2 text-white">
              {filmDetails.tagline}
            </p>
          )}

          <div className={`flex gap-3 flex-wrap ${filmDetails.tagline ? 'mt-3' : 'mt-12'} text-white`}>
            {filmDetails.genres.map((g) => (
              <span key={g.id} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {g.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-3 text-white">
            <span>⭐ {filmDetails.vote_average.toFixed(1)}</span>
            <span>{filmDetails.runtime} min</span>
            <span>{filmDetails.release_date}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-2">
            Opis
          </h2>

          <p className="leading-relaxed text-sm sm:text-base">
            {filmDetails.overview}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg sm:text-xl">Budżet</h3>
              <p>${filmDetails.budget.toLocaleString()}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg sm:text-xl">Opłaty</h3>
              <p>${filmDetails.revenue.toLocaleString()}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg sm:text-xl">Kraj</h3>
              <p>{filmDetails.production_countries.map((c) => c.name).join(", ")}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg sm:text-xl">Firmy</h3>
              <p>{filmDetails.production_companies.map((c) => c.name).join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmDetails