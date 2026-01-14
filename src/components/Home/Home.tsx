import { useTranslation } from "react-i18next";
import { fetchNowPlayingFilms, fetchPopularFilms, fetchRatedFilms, fetchUpcomingFilms } from "../../store/reducers/filmsReducer";
import FilmsListContainer from "../FilmsList/FilmsListContainer";

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="my-5">
      <div className="mb-7">
        <h1 className="text-2xl">{t("home.upcoming")}</h1>
        <FilmsListContainer action={fetchUpcomingFilms} selectorKey="upcoming" />
      </div>

      <div className="my-7">
        <h1 className="text-2xl">{t("home.nowPlaying")}</h1>
        <FilmsListContainer action={fetchNowPlayingFilms} selectorKey="playing" />
      </div>

      <div className="my-7">
        <h1 className="text-2xl">{t("home.topRated")}</h1>
        <FilmsListContainer action={fetchRatedFilms} selectorKey="rated" />
      </div>

      <div className="mt-7">
        <h1 className="text-2xl">{t("home.popular")}</h1>
        <FilmsListContainer action={fetchPopularFilms} selectorKey="popular" />
      </div>
    </div>
  );
};

export default Home;