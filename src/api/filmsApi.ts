import type { FilmsResponse, TFilmDetails } from "../types/TFilms"
import { http } from "./http"

export const getPopularFilms = async () => {
    const res = await http.get<FilmsResponse>('/movie/popular')
    return res.data
}

export const getFilmById = async (id: string | undefined) => {
    const res = await http.get<TFilmDetails>(`/movie/${id}`)
    return res.data
}

export const getUpcomingFilms = async () => {
    const res = await http.get<FilmsResponse>('/movie/upcoming')
    return res.data
}

export const getNowPlayingFilms = async () => {
    const res = await http.get<FilmsResponse>('/movie/now_playing')
    return res.data
}

export const getRatedFilms = async () => {
    const res = await http.get<FilmsResponse>('/movie/top_rated')
    return res.data
}

export const getSearchFilms = async (query: string) => {
    const res = await http.get<FilmsResponse>('/search/movie', {
        params: {
            query: query
        }
    })
    return res.data
}