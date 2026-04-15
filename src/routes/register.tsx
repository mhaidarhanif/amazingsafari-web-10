import { RegisterForm } from "@/components/auth/register-form";

import { $api } from "@/modules/common/api";
import { useNavigate } from "react-router";

export function RegisterRoute() {
  const navigate = useNavigate();
  const { mutate } = $api.useMutation("post", "/auth/register", {
    onSuccess: () => {
      navigate("/login");
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const username = formData.get("username")?.toString();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!username || !name || !email || !password) {
      return;
    }

    mutate({
      body: {
        username,
        name,
        email,
        password,
      },
    });
  };

  return (
    <main>
      <RegisterForm handleSubmit={handleSubmit} />
    </main>
  );
}
