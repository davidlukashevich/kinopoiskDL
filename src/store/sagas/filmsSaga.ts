import { call, put, takeLatest } from "redux-saga/effects";
import { getFilmById, getPopularFilms } from "../../api/filmsApi";
import type { FilmsResponse, TFilmDetails } from "../../types/TFilms";
import { fetchFilmDetails, fetchFilms, setFilmDetails, setFilms } from "../reducers/filmsReducer";

function* getFilmsWorker() {
    const response: FilmsResponse = yield call(getPopularFilms)
    yield put(setFilms(response))
}

function* getFilmDetailsWorker(action: ReturnType<typeof fetchFilmDetails>) {
    const id = action.payload
    const response: TFilmDetails = yield call(getFilmById, id)
    yield put(setFilmDetails(response))
}

export function* filmsWatcher() {
    yield takeLatest(fetchFilms.type, getFilmsWorker)
    yield takeLatest(fetchFilmDetails.type, getFilmDetailsWorker)
}