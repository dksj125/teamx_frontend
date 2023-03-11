import axios, { AxiosInstance } from "axios";

export class AuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 3000,
      timeoutErrorMessage: "Time out!",
    });
  }

  login = (username: string, password: string) => {
    return this.instance

      .post("/login", {
        username,
        password,
      })

      .then(
        (res: {
          data: { username: any; accessToken: any; expiredAt: any };
        }) => {
          return {
            username: res.data.username,
            accessToken: res.data.accessToken,
            expiredAt: res.data.expiredAt,
          };
        }
      );
  };
}
