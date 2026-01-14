import type { FilmsResponse, TFilmDetails } from "../types/TFilms"
import { http } from "./http"

export const getPopularFilms = async (lang: string) => {
    const res = await http.get<FilmsResponse>('/movie/popular', {params: {language: lang}})
    return res.data
}

export const getFilmById = async (id: string | undefined, lang: string) => {
    const res = await http.get<TFilmDetails>(`/movie/${id}`, {params: {language: lang}})
    return res.data
}

export const getUpcomingFilms = async (lang: string) => {
    const res = await http.get<FilmsResponse>('/movie/upcoming', {params: {language: lang}})
    return res.data
}

export const getNowPlayingFilms = async (lang: string) => {
    const res = await http.get<FilmsResponse>('/movie/now_playing', {params: {language: lang}})
    return res.data
}

export const getRatedFilms = async (lang: string) => {
    const res = await http.get<FilmsResponse>('/movie/top_rated', {params: {language: lang}})
    return res.data
}

export const getSearchFilms = async (query: string, lang: string) => {
    const res = await http.get<FilmsResponse>('/search/movie', {
        params: {
            query: query,
            language: lang
        }
    })
    return res.data
}