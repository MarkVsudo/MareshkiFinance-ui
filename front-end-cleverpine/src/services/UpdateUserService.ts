import { UserProfileResponse, UsersApi, UserProfileUpdate } from "../openapi";

class UpdateUserService {
  private static instance: UpdateUserService | null = null;
  private usersApi: UsersApi | null = null;

  private constructor() {
    this.usersApi = new UsersApi();
  }

  public static getInstance(): UpdateUserService {
    if (!UpdateUserService.instance) {
      UpdateUserService.instance = new UpdateUserService();
    }

    return UpdateUserService.instance;
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

export default UpdateUserService;
