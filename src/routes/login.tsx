import { LoginForm } from "@/components/auth/login-form";
import type { CookieValues } from "@/modules/auth/type";
import { $api } from "@/modules/common/api";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

export function LoginRoute() {
  const [_, setCookie] = useCookies<"token", CookieValues>([]);

  const navigate = useNavigate();
  const { mutate } = $api.useMutation("post", "/auth/login", {
    onSuccess: (responseLogin) => {
      const { token } = responseLogin;
      setCookie("token", token);
      navigate("/dashboard");
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      return;
    }

    mutate({
      body: {
        email,
        password,
      },
    });
  };

  return (
    <main>
      <LoginForm handleSubmit={handleSubmit} />
    </main>
  );
}
