import { Outlet } from "react-router";

export function LayoutRoute() {
  return (
    <div className="max-w-xl w-full">
      <Outlet />
    </div>
  );
}
