import { http } from "./http"

export const getPopularFilms = async () => {
    const res = await http.get('/trending/movie/day?language=en-US')
    return res.data
}

export const getFilmById = async (id: string | undefined) => {
    const res = await http.get(`/movie/${id}`)
    return res.data
}