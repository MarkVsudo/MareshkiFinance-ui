import { UsersApi, UserProfileResponse } from "../openapi";

const usersApi = new UsersApi();

export const GetUserService = {
  getUserProfile: async (userId: number): Promise<UserProfileResponse> => {
    const response = await usersApi.getUserProfile({ userId });
    return response;
  },
};
