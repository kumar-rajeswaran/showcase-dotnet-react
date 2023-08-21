import { createSlice } from "@reduxjs/toolkit";
import { IActionWithOutPayload, IActionWithPayload, IAuthReducer, ILogin, IUser } from "../../types";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const initialState: IAuthReducer = {
  isFetching: false,
  user: {} as IUser,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    doLogin: (state: IAuthReducer, _action: IActionWithPayload<ILogin>) => {
      state.isFetching = true;
    },
    setAuthResponse: (state: IAuthReducer, action: IActionWithPayload<IUser>) => {
      state.user = action.payload;
      state.isFetching = false;
    },
    doLogout: (state: IAuthReducer, _action: IActionWithOutPayload) => {
      state.isFetching = true;
      state.user = {} as IUser;
      state.isFetching = false;
    },
  },
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["isFetching"],
};
export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const { doLogin, setAuthResponse,doLogout } = authSlice.actions;
