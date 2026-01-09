import { all, fork } from "redux-saga/effects";
import { filmsWatcher } from "./filmsSaga";
import { trailerWathcer } from "./trailerSaga";

export default function* rootSaga() {
  yield all([
    fork(filmsWatcher),
    fork(trailerWathcer)
  ]);
}
