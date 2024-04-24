import { UserProfileResponse, UsersApi, UserProfileUpdate } from "../openapi";

class UserService {
  private static instance: UserService | null = null;
  private usersApi: UsersApi | null = null;

  private constructor() {
    this.usersApi = new UsersApi();
  }

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }

    return UserService.instance;
  }

  public async updateUserProfile(
    userId: number,
    userProfileUpdate: UserProfileUpdate
  ): Promise<UserProfileResponse> {
    const response = await this.usersApi?.updateUserProfile({
      userId,
      userProfileUpdate,
    });
    return response as UserProfileResponse;
  }
}

export const UpdateUserService = UserService.getInstance();
