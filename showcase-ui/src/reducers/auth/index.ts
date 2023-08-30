import { createSlice } from "@reduxjs/toolkit";
import { IActionWithOutPayload, IActionWithPayload, IAuthReducer, ILogin, IUser } from "types";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const initialState: IAuthReducer = {
  isFetching: false,
  user: {} as IUser,
  isError: false,
  message: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    doLogin: (state: IAuthReducer, _action: IActionWithPayload<ILogin>) => {
      state.isFetching = true;
      state.isError = false;
      state.message = null;
    },
    setAuthResponse: (state: IAuthReducer, action: IActionWithPayload<IUser>) => {
      state.user = action.payload;
      state.isFetching = false;
      state.message = "Authentication Successfull!";
    },
    doLogout: (state: IAuthReducer, _action: IActionWithOutPayload) => {
      state.user = {} as IUser;
      state.isError = false;
      state.message = null;
    },
    setError: (state: IAuthReducer, action: IActionWithPayload<string>) => {
      state.isError = true;
      state.message = action.payload;
      state.isFetching = false;
    },
  },
});

const persistConfig = {
  key: "user",
  storage,
  blacklist: ["isFetching", "isError", "message"],
};
export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const { doLogin, setAuthResponse, doLogout, setError } = authSlice.actions;
