import { IUser } from "../common";

export interface IStore {
  auth: IAuthReducer;
}

export interface IActionWithPayload<T> {
  type: string;
  payload: T;
}

export interface IActionWithOutPayload {
  type: string;
}

export interface IAuthReducer {
  isFetching: boolean;
  user: IUser;
  error: string | null;
}
