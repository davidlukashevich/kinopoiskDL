import { call, put, takeLatest } from "redux-saga/effects";
import { getFilmById, getNowPlayingFilms, getPopularFilms, getRatedFilms, getSearchFilms, getUpcomingFilms } from "../../api/filmsApi";
import type { FilmsResponse, TFilmDetails } from "../../types/TFilms";
import { fetchFilmDetails, fetchNowPlayingFilms, fetchPopularFilms, fetchRatedFilms, fetchSearchFilms, fetchUpcomingFilms, setFilmDetails, setNowPlayingFilms, setPopularFilms, setRatedFilms, setSearchFilms, setUpcomingFilms } from "../reducers/filmsReducer";

function* getSearchFilmsWorker(action: ReturnType<typeof fetchSearchFilms>) {
    const { query, lang } = action.payload
    const response: FilmsResponse = yield call(getSearchFilms, query, lang)
    yield put(setSearchFilms(response))
}

function* getPopularFilmsWorker(action: ReturnType<typeof fetchPopularFilms>) {
    const { lang } = action.payload
    const response: FilmsResponse = yield call(getPopularFilms, lang)
    yield put(setPopularFilms(response))
}

function* getUpcomingFilmsWorker(action: ReturnType<typeof fetchUpcomingFilms>) {
    const { lang } = action.payload
    const response: FilmsResponse = yield call(getUpcomingFilms, lang)
    yield put(setUpcomingFilms(response))
}

function* getRatedFilmsWorker(action: ReturnType<typeof fetchRatedFilms>) {
    const { lang } = action.payload
    const response: FilmsResponse = yield call(getRatedFilms, lang)
    yield put(setRatedFilms(response))
}

function* getNowPlayingFilmsWorker(action: ReturnType<typeof fetchNowPlayingFilms>) {
    const { lang } = action.payload
    const response: FilmsResponse = yield call(getNowPlayingFilms, lang)
    yield put(setNowPlayingFilms(response))
}

function* getFilmDetailsWorker(action: ReturnType<typeof fetchFilmDetails>) {
    const {id, lang} = action.payload
    const response: TFilmDetails = yield call(getFilmById, id, lang)
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