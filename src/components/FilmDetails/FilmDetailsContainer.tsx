import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import type { AppDispatch, RootState } from "../../store"
import { fetchFilmDetails } from "../../store/reducers/filmsReducer"
import { fetchFilmTrailer } from "../../store/reducers/trailerReducer"
import FilmTrailerModal from "../Modal/FilmTrailerModal"
import FilmDetails from "./FilmDetails"

const FilmDetailsContainer = () => {
    const [open, setOpen] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { filmDetails } = useSelector((s: RootState) => s.films)
    const { trailer } = useSelector((s: RootState) => s.trailer)
    const navigate = useNavigate()
    const { i18n } = useTranslation()
    const lang = i18n.language

    useEffect(() => {
        dispatch(fetchFilmDetails({ id, lang }))
    }, [dispatch, lang])

    const watchTrailer = (title: string) => {
        setOpen(true)
        dispatch(fetchFilmTrailer({ title }))
    }

    const onClose = () => {
        setOpen(false)
    }

    if (!filmDetails) return

    return (
        <div>
            <FilmDetails filmDetails={filmDetails} watchTrailer={watchTrailer} navigate={navigate} />
            {open && <FilmTrailerModal videoId={trailer?.items[0].id.videoId} onClose={onClose} />}
        </div>
    )
}

export default FilmDetailsContainer