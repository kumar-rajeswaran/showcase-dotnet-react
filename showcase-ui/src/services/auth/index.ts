import { IApiResponse, ILogin, IUser } from "types";
import api from "../api";
import { AxiosError } from "axios";
const login = async (req: ILogin): Promise<IUser> => {
  let response = {} as IUser;
  await api
    .post<IApiResponse<IUser>>("/User/login", req, {
      validateStatus: (status) => status < 500,
    })
    .then((res) => {
      response = res.data.data;
    })
    .catch((err: AxiosError) => {
      console.log("auth error", err.message, { err });
      throw err.message;
    });
  return response;
};

export const authService = {
  login,
};
