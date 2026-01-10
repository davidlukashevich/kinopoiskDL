import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import type { AppDispatch, RootState } from "../../store"
import { fetchFilmDetails } from "../../store/reducers/filmsReducer"
import FilmDetails from "./FilmDetails"
import { fetchFilmTrailer } from "../../store/reducers/trailerReducer"
import FilmTrailerModal from "../Modal/FilmTrailerModal"

const FilmDetailsContainer = () => {
    const [open, setOpen] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { filmDetails } = useSelector((s: RootState) => s.films)
    const { trailer } = useSelector((s: RootState) => s.trailer)

    useEffect(() => {
        dispatch(fetchFilmDetails(id))
    }, [dispatch])

    const watchTrailer = (title: string) => {
        setOpen(true)
        dispatch(fetchFilmTrailer({ title }))
    }

    const onClose = () => {
        setOpen(false)
    }

    const addFilmToFavorites = (film: any) => {
        const key = "favoritesFilms"

        const stored = localStorage.getItem(key)
        const films = stored ? JSON.parse(stored) : []

        const exists = films.some((f: any) => f.id === film.id)
        if (exists) return

        const updated = [...films, film]

        localStorage.setItem(key, JSON.stringify(updated))
    }


    if (!filmDetails) return

    return (
        <div>
            <FilmDetails filmDetails={filmDetails} watchTrailer={watchTrailer} addFilmToFavorites={addFilmToFavorites} />
            {open && <FilmTrailerModal videoId={trailer?.items[0].id.videoId} onClose={onClose} />}
        </div>
    )
}

export default FilmDetailsContainer