import { TokenResponse, UserRegistration, UsersApi } from "../openapi";

const usersApi = new UsersApi();

export const RegisterService = {
  register: async (
    firstName: string,
    email: string,
    password: string
  ): Promise<TokenResponse> => {
    const userRegistration: UserRegistration = { firstName, email, password };
    const response = await usersApi.register({ userRegistration });
    return await response;
  },
};
