import { UserProfileResponse, UsersApi, UserProfileUpdate } from "../openapi";

const usersApi = new UsersApi();

export const UpdateUserService = {
  updateUserProfile: async (
    userId: number,
    userProfileUpdate: UserProfileUpdate
  ): Promise<UserProfileResponse> => {
    const response = await usersApi.updateUserProfile({
      userId,
      userProfileUpdate,
    });
    return response;
  },
};
