import { UserProfileResponse, UsersApi } from "../openapi";

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

  public async getUserProfile(userId: number): Promise<UserProfileResponse> {
    const response = await this.usersApi?.getUserProfile({ userId });
    return response as UserProfileResponse;
  }
}

export const GetUserService = UserService.getInstance();
