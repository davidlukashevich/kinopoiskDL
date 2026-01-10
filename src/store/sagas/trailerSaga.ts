import { call, put, takeLatest } from "redux-saga/effects";
import { getFilmTrailer } from "../../api/trailerApi";
import { fetchFilmTrailer, setFilmTrailer } from "../reducers/trailerReducer";
import type { TrailerSearchResponse } from "../../types/TTrailer";

function* getFilmTrailerWorker(action: ReturnType<typeof fetchFilmTrailer>) {
    const { title } = action.payload

    const response: TrailerSearchResponse = yield call(getFilmTrailer, title)
    yield put(setFilmTrailer(response))
}

export function* trailerWathcer() {
    yield takeLatest(fetchFilmTrailer.type, getFilmTrailerWorker)
}