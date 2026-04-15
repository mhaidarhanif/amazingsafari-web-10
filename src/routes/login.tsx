import { LoginForm } from "@/components/auth/login-form";
import { $api } from "@/modules/common/api";

export function LoginRoute() {
  const { mutate } = $api.useMutation("post", "/auth/login", {
    onSuccess: (responseLogin) => {
      const { token } = responseLogin;

      console.log(token);

      // TODO: save token in browser cookie
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
