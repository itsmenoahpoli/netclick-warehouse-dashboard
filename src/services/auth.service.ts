import { TCredentials } from "~/types/auth";
import { HttpService } from "~/services";
import { useAuthStore } from "~/store";

export class AuthService extends HttpService {
  private authStore: any;

  constructor() {
    super();
    this.authStore = useAuthStore.getState();
  }

  public async login(credentials: TCredentials) {
    try {
      const response = await this.HTTP.post(this.API_ROUTES.AUTH.login, {
        ...credentials,
        type: "back-office",
      });

      this.authStore.SET_AUTH_DATA({
        user: response.data.data.user,
        authToken: response.data.data.accessToken,
      });

      return "AUTHENTICATED";
    } catch (error) {
      this.handleHttpError(error);
    }
  }

  public async logout() {
    this.authStore.REMOVE_AUTH_DATA();
  }
}
