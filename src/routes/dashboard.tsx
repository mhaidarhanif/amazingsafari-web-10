import { useUser } from "@/modules/auth/hooks";

export function DashboardRoute() {
  const { user, error, isLoading } = useUser();

  if (isLoading || !user) return <p>Loading user dashboard...</p>;
  if (error) return <p>Load user dashboard error: ${error}</p>;

  return (
    <main>
      <h1>Dashboard</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  );
}
