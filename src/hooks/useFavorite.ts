import { useEffect, useState } from "react"
import type { FavoriteFilm } from "../types/TFilms"

const STORAGE_KEY = "favoritesFilms"

export const useFavorite = (film?: FavoriteFilm) => {
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        if (!film?.id) {
            setIsFavorite(false)
            return
        }

        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) {
            setIsFavorite(false)
            return
        }

        const parsed: FavoriteFilm[] = JSON.parse(stored)
        setIsFavorite(parsed.some((f) => f.id === film.id))
    }, [film?.id])

    const toggleFavorite = () => {
        if (!film) return

        const stored = localStorage.getItem(STORAGE_KEY)
        const parsed: FavoriteFilm[] = stored ? JSON.parse(stored) : []

        let updated: FavoriteFilm[]

        if (parsed.some((f) => f.id === film.id)) {
            updated = parsed.filter((f) => f.id !== film.id)
            setIsFavorite(false)
        } else {
            updated = [...parsed, film]
            setIsFavorite(true)
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    }

    return { isFavorite, toggleFavorite }
}