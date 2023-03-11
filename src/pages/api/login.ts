import { AuthService } from "./auth";
import Cookie from "js-cookie";
import { NextApiRequest, NextApiResponse } from "next";

export const Login = async (username: string, password: string) => {
  const authService = new AuthService("http://localhost:3000");
  const result = await authService.login(username, password);
  Cookie.set("accessToken", result.accessToken);
  Cookie.set("expiredAt", result.expiredAt);
  Cookie.set("username", result.username);
  return result;
};
