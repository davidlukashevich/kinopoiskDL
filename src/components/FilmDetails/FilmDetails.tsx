import type { NavigateFunction } from "react-router-dom";
import type { TFilmDetails } from "../../types/TFilms";
import FilmCardContainer from "../FilmCard/FilmCardContainer";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

type Props = {
  filmDetails: TFilmDetails;
  watchTrailer: (title: string, date: string) => void;
  navigate: NavigateFunction;
};

const FilmDetails = ({ filmDetails, watchTrailer, navigate }: Props) => {
  const { t } = useTranslation();
  const imgBase = "https://image.tmdb.org/t/p/original";

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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold md:text-white">
            {filmDetails.title}
          </h1>

          {filmDetails.tagline && (
            <p className="text-lg sm:text-xl italic mt-2 md:text-white">
              {filmDetails.tagline}
            </p>
          )}

          <div className={`flex gap-3 flex-wrap ${filmDetails.tagline ? "mt-3" : "mt-12"} md:text-white`}>
            {filmDetails.genres.map((g) => (
              <span key={g.id} className="px-3 py-1 md:bg-white/10 bg-black/10 rounded-full text-sm">
                {g.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-3 md:text-white">
            <span className="flex items-center gap-1.5"><div className="text-yellow-400"><FaStar /></div> {filmDetails.vote_average.toFixed(1)}</span>
            <span>{filmDetails.runtime} min</span>
            <span>{filmDetails.release_date}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-2">
            {t("film.description")}
          </h2>

          <p className="leading-relaxed text-sm sm:text-base">
            {filmDetails.overview}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg sm:text-xl">{t("film.budget")}</h3>
              <p>${filmDetails.budget.toLocaleString()}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg sm:text-xl">{t("film.revenue")}</h3>
              <p>${filmDetails.revenue.toLocaleString()}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg sm:text-xl">{t("film.country")}</h3>
              <p>{filmDetails.production_countries.map((c) => c.name).join(", ")}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg sm:text-xl">{t("film.companies")}</h3>
              <p>{filmDetails.production_companies.map((c) => c.name).join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;