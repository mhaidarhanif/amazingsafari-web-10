import { useCookies } from "react-cookie";
import type { CookieValues } from "./type";
import { $api } from "../common/api";

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

export function useUser() {
  const { token } = useAuth();

  if (!token) {
    return {
      isAuthenticated: false,
      user: null,
      error: null,
      isLoading: null,
    };
  }

  const {
    data: user,
    error,
    isLoading,
  } = $api.useQuery("get", "/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!user || error) {
    return {
      isAuthenticated: false,
      user,
      error,
      isLoading,
    };
  }

  return {
    isAuthenticated: true,
    user,
    error,
    isLoading,
  };
}
