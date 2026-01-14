import { createAction, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilmsResponse, TFilmDetails } from "../../types/TFilms";

export const fetchSearchFilms = createAction<{ query: string, lang: string }>("fetchSearchFilms")
export const fetchPopularFilms = createAction<{lang: string}>("fetchPopularFilms")
export const fetchUpcomingFilms = createAction<{lang: string}>("fetchUpcomingFilms")
export const fetchRatedFilms = createAction<{lang: string}>("fetchRatedFilms")
export const fetchNowPlayingFilms = createAction<{lang: string}>("fetchNowPlayingFilms")
export const fetchFilmDetails = createAction<{id: string | undefined, lang: string}>("fetchFilmDetails")

type initialStateType = {
    searchFilms: FilmsResponse | null
    upcoming: FilmsResponse | null
    popular: FilmsResponse | null
    rated: FilmsResponse | null
    playing: FilmsResponse | null
    filmDetails: TFilmDetails | null
}

const initialState: initialStateType = {
    searchFilms: null,
    upcoming: null,
    popular: null,
    rated: null,
    playing: null,
    filmDetails: null
}

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setSearchFilms(state, action: PayloadAction<FilmsResponse>) {
            state.searchFilms = action.payload
        },
        setUpcomingFilms(state, action: PayloadAction<FilmsResponse>) {
            state.upcoming = action.payload
        },
        setPopularFilms(state, action: PayloadAction<FilmsResponse>) {
            state.popular = action.payload
        },
        setRatedFilms(state, action: PayloadAction<FilmsResponse>) {
            state.rated = action.payload
        },
        setNowPlayingFilms(state, action: PayloadAction<FilmsResponse>) {
            state.playing = action.payload
        },
        setFilmDetails(state, action: PayloadAction<TFilmDetails>) {
            state.filmDetails = action.payload
        }
    }
})

export const { setSearchFilms, setPopularFilms, setUpcomingFilms, setRatedFilms, setNowPlayingFilms, setFilmDetails } = filmsSlice.actions;
export default filmsSlice.reducer;