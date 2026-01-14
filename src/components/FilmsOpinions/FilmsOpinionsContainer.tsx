import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FilmsOpinions from "./FilmsOpinions"
import type { Opinions } from "../../types/TOpinions"
import { useTheme } from "../../provider/ThemeProvider"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../store"
import { fetchFilmDetails } from "../../store/reducers/filmsReducer"

const FilmsOpinionsContainer = () => {
    const { filmDetails } = useSelector((s: RootState) => s.films)
    const [opinions, setOpinions] = useState<Opinions[]>([])
    const [text, setText] = useState("")
    const [rating, setRating] = useState(0)
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { theme } = useTheme()
    const { i18n } = useTranslation()
    const lang = i18n.language

    if (!id) return

    useEffect(() => {
        dispatch(fetchFilmDetails({ id, lang }))
    }, [id, dispatch, lang])

    useEffect(() => {
        const stored = localStorage.getItem("reviews")
        if (stored) {
            const parsed = JSON.parse(stored)
            setOpinions(parsed[id] || [])
        }
    }, [id])

    const syncToLocalStorage = (updatedOpinions: Opinions[]) => {
        const stored = localStorage.getItem("reviews")
        const parsed = stored ? JSON.parse(stored) : {}
        parsed[id] = updatedOpinions
        localStorage.setItem("reviews", JSON.stringify(parsed))
    }

    const addOpinions = () => {
        if (!text.trim() || rating === 0) return

        const newOpinion: Opinions = {
            id: Date.now(),
            text,
            rating,
            date: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }

        const updated = [...opinions, newOpinion]
        setOpinions(updated)
        syncToLocalStorage(updated)
        setText("")
        setRating(0)
    }

    const removeOpinions = (id: number) => {
        const updated = opinions.filter(r => r.id !== id)
        setOpinions(updated)
        syncToLocalStorage(updated)
    }

    return (
        <FilmsOpinions
            title={filmDetails?.title}
            poster={filmDetails?.poster_path}
            opinions={opinions}
            text={text}
            rating={rating}
            theme={theme}
            setText={setText}
            setRating={setRating}
            addOpinions={addOpinions}
            removeOpinions={removeOpinions}
        />
    )
}

export default FilmsOpinionsContainer