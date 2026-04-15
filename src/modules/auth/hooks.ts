import { useCookies } from "react-cookie";
import type { CookieValues } from "./type";

export function useAuth() {
  const [cookies, setCookie] = useCookies<"token", CookieValues>([]);

  const setToken = (token: string) => {
    setCookie("token", token);
  };

  return {
    token: cookies.token,
    setToken,
  };
}
