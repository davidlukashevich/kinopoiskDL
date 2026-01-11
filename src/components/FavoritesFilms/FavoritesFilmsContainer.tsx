import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import FavoritesFilms from "./FavoritesFilms"
import type { Film } from "../../types/TFilms"

const FavoritesFilmsContainer = () => {
    const [films, setFilms] = useState<Film[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const stored = localStorage.getItem("favoritesFilms")
        if (stored) {
            setFilms(JSON.parse(stored))
        }
    }, [])

    const removeFilm = (id: number) => {
        const updated = films.filter(f => f.id !== id)
        setFilms(updated)
        localStorage.setItem("favoritesFilms", JSON.stringify(updated))
    }

    return (
        <FavoritesFilms
            films={films}
            navigate={navigate}
            removeFilm={removeFilm}
        />
    )
}

export default FavoritesFilmsContainer