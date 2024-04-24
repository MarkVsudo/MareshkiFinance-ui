import { TokenResponse, UserLogin, UsersApi } from "../openapi";

class LoginService {
  private static instance: LoginService | null = null;
  private usersApi: UsersApi | null = null;

  private constructor() {
    this.usersApi = new UsersApi();
  }

  public static getInstance(): LoginService {
    if (!LoginService.instance) {
      LoginService.instance = new LoginService();
    }

    return LoginService.instance;
  }

  public async login(email: string, password: string): Promise<TokenResponse> {
    const userLogin: UserLogin = { email, password };
    const response = await this.usersApi?.login({ userLogin });
    return response as TokenResponse;
  }

}

export default LoginService;