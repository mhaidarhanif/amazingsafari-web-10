import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import { HomeRoute } from "./routes/home.tsx";
import { RegisterRoute } from "./routes/register.tsx";
import { LoginRoute } from "./routes/login.tsx";
import { DashboardRoute } from "./routes/dashboard.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeRoute />} />
        <Route path="/register" element={<RegisterRoute />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/dashboard" element={<DashboardRoute />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
);
