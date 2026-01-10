import { createAction, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TrailerSearchResponse } from "../../types/TTrailer";

export const fetchFilmTrailer = createAction<{ title: string }>("fetchFilmTrailer")

type initialStateType = {
    trailer: TrailerSearchResponse | null
}

const initialState: initialStateType = {
    trailer: null
}

const trailerSlice = createSlice({
    name: 'trailer',
    initialState,
    reducers: {
        setFilmTrailer(state, action: PayloadAction<any>) {
            state.trailer = action.payload
        }
    }
})

export const { setFilmTrailer } = trailerSlice.actions;
export default trailerSlice.reducer;