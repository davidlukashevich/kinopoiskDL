import { all, fork } from "redux-saga/effects";
import { filmsWatcher } from "./filmsSaga";

export default function* rootSaga() {
  yield all([
    fork(filmsWatcher)
  ]);
}
