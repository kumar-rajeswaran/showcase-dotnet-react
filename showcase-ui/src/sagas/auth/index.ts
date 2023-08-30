import { authSlice, setError } from "reducers";
import { PutEffect, put, takeLatest } from "redux-saga/effects";
import { authService } from "services";
import { IActionWithPayload, ILogin, IUser } from "types";
const { doLogin, setAuthResponse } = authSlice.actions;
function* callLogin(action: IActionWithPayload<ILogin>): Generator<Promise<IUser> | PutEffect, void, IUser> {
  try {
    const res = yield authService.login(action.payload);
    yield put(setAuthResponse(res));
  } catch (error) {
    console.log("callLogin error", { error });
    yield put(setError(`${error}`))
  }
}

export function* takeAllAuthActions() {
  yield takeLatest(doLogin.type, callLogin);
}
