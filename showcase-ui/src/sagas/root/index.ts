import { all, fork } from "redux-saga/effects";
import { takeAllAuthActions } from "sagas/auth";

export function* rootSaga() {
  yield all([fork(takeAllAuthActions)]);
}
