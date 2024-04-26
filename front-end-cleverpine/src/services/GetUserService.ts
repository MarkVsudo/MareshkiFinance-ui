import { UserProfileResponse, UsersApi } from "../openapi";

class GetUserService {
  private static instance: GetUserService | null = null;
  private usersApi: UsersApi | null = null;

  private constructor() {
    this.usersApi = new UsersApi();
  }

  public static getInstance(): GetUserService {
    if (!GetUserService.instance) {
      GetUserService.instance = new GetUserService();
    }

    return GetUserService.instance;
  }

  public async getUserProfile(userId: number): Promise<UserProfileResponse> {
    const response = await this.usersApi?.getUserProfile({ userId });
    return response as UserProfileResponse;
  }
}

export default GetUserService;
