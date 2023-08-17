import { createSlice } from "@reduxjs/toolkit";
import { IActionWithPayload, IAuthReducer, ILogin, IUser } from "../../types";
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
  },
});

export const { doLogin, setAuthResponse } = authSlice.actions;
