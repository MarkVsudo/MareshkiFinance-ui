import { TokenResponse, UserLogin, UsersApi } from "../openapi";

const usersApi = new UsersApi();

export const LoginService = {
  login: async (email: string, password: string): Promise<TokenResponse> => {
    const userLogin: UserLogin = { email, password };
    const response = await usersApi.login({ userLogin });
    return await response;
  },
};
