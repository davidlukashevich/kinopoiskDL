import { createAction, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilmsResponse, TFilmDetails } from "../../types/TFilms";

export const fetchSearchFilms = createAction<{ query: string }>("fetchSearchFilms")
export const fetchPopularFilms = createAction("fetchPopularFilms")
export const fetchUpcomingFilms = createAction("fetchUpcomingFilms")
export const fetchRatedFilms = createAction("fetchRatedFilms")
export const fetchNowPlayingFilms = createAction("fetchNowPlayingFilms")
export const fetchFilmDetails = createAction<string | undefined>("fetchFilmDetails")

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