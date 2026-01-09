import { fetchNowPlayingFilms, fetchPopularFilms, fetchRatedFilms, fetchUpcomingFilms } from "../../store/reducers/filmsReducer"
import FilmsListContainer from "../FilmsList/FilmsListContainer"

const Home = () => {
    return (
        <div className="my-5">
            <div className="mb-7">
                <h1 className="text-2xl">Oczekiwane premiery</h1>
                <FilmsListContainer action={fetchUpcomingFilms} selectorKey="upcoming" />
            </div>
            <div className="my-7">
                <h1 className="text-2xl">Teraz na dużych ekranach</h1>
                <FilmsListContainer action={fetchNowPlayingFilms} selectorKey="playing" />
            </div>
            <div className="my-7">
                <h1 className="text-2xl">Najlepsze filmy</h1>
                <FilmsListContainer action={fetchRatedFilms} selectorKey="rated" />
            </div>
            <div className="mt-7">
                <h1 className="text-2xl">Popularne filmy</h1>
                <FilmsListContainer action={fetchPopularFilms} selectorKey="popular" />
            </div>
        </div>
    )
}

export default Home