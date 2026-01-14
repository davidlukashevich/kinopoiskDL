import type { NavigateFunction } from "react-router-dom";
import type { Film } from "../../types/TFilms";
import FilmCardContainer from "../FilmCard/FilmCardContainer";
import { useTranslation } from "react-i18next";

type Props = {
  films: Film[];
  navigate: NavigateFunction;
  removeFilm: (id: number) => void;
};

const FavoritesFilms = ({ films, navigate, removeFilm }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-5">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        {t("favorites.title")}
      </h1>

      {films.length === 0 && (
        <p className="text-lg opacity-70 text-center md:text-left">
          {t("favorites.empty")}
        </p>
      )}

      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {films.map((film) => (
          <FilmCardContainer
            key={film.id}
            id={film.id}
            title={film.title}
            img={film.poster_path}
            navigate={navigate}
            removeFilm={removeFilm}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesFilms;