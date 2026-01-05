import { createAction, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {FilmsResponse, TFilmDetails } from "../../types/TFilms";

export const fetchFilms = createAction("fetchFilms")
export const fetchFilmDetails = createAction<string | undefined>("fetchFilmDetails")

type initialStateType = {
    films: FilmsResponse | null
    filmDetails: TFilmDetails | null
}

const initialState: initialStateType = {
    films: null,
    filmDetails: null
}

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms(state, action: PayloadAction<FilmsResponse>) {
            state.films = action.payload
        },
        setFilmDetails(state, action: PayloadAction<TFilmDetails>) {
            state.filmDetails = action.payload
        }
    }
})

export const { setFilms, setFilmDetails } = filmsSlice.actions; 
export default filmsSlice.reducer;