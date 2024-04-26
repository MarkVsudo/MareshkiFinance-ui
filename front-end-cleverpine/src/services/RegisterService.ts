import { TokenResponse, UserRegistration, UsersApi } from "../openapi";

class RegisterService {
  private static instance: RegisterService | null = null;
  private usersApi: UsersApi | null = null;

  private constructor() {
    this.usersApi = new UsersApi();
  }

  public static getInstance(): RegisterService {
    if (!RegisterService.instance) {
      RegisterService.instance = new RegisterService();
    }

    return RegisterService.instance;
  }

  public async register(
    firstName: string,
    email: string,
    password: string
  ): Promise<TokenResponse> {
    const userRegistration: UserRegistration = { firstName, email, password };
    const response = await this.usersApi?.register({ userRegistration });
    return response as TokenResponse;
  }
}

export default RegisterService;
