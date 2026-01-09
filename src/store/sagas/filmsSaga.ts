import { call, put, takeLatest } from "redux-saga/effects";
import { getFilmById, getNowPlayingFilms, getPopularFilms, getRatedFilms, getSearchFilms, getUpcomingFilms } from "../../api/filmsApi";
import type { FilmsResponse, TFilmDetails } from "../../types/TFilms";
import { fetchFilmDetails, fetchNowPlayingFilms, fetchPopularFilms, fetchRatedFilms, fetchSearchFilms, fetchUpcomingFilms, setFilmDetails, setNowPlayingFilms, setPopularFilms, setRatedFilms, setSearchFilms, setUpcomingFilms } from "../reducers/filmsReducer";

function* getSearchFilmsWorker(action: ReturnType<typeof fetchSearchFilms>) {
    const { query } = action.payload
    const response: FilmsResponse = yield call(getSearchFilms, query)
    yield put(setSearchFilms(response))
}

function* getPopularFilmsWorker() {
    const response: FilmsResponse = yield call(getPopularFilms)
    yield put(setPopularFilms(response))
}

function* getUpcomingFilmsWorker() {
    const response: FilmsResponse = yield call(getUpcomingFilms)
    yield put(setUpcomingFilms(response))
}

function* getRatedFilmsWorker() {
    const response: FilmsResponse = yield call(getRatedFilms)
    yield put(setRatedFilms(response))
}

function* getNowPlayingFilmsWorker() {
    const response: FilmsResponse = yield call(getNowPlayingFilms)
    yield put(setNowPlayingFilms(response))
}

function* getFilmDetailsWorker(action: ReturnType<typeof fetchFilmDetails>) {
    const id = action.payload
    const response: TFilmDetails = yield call(getFilmById, id)
    yield put(setFilmDetails(response))
}

export function* filmsWatcher() {
    yield takeLatest(fetchSearchFilms.type, getSearchFilmsWorker)
    yield takeLatest(fetchPopularFilms.type, getPopularFilmsWorker)
    yield takeLatest(fetchFilmDetails.type, getFilmDetailsWorker)
    yield takeLatest(fetchRatedFilms.type, getRatedFilmsWorker)
    yield takeLatest(fetchNowPlayingFilms.type, getNowPlayingFilmsWorker)
    yield takeLatest(fetchUpcomingFilms.type, getUpcomingFilmsWorker)
}