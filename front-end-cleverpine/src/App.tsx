import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./pages/Layout/Layout";
import DashboardProfile from "./pages/DashboardPage/DashboardProfile/DashboardProfile";
import DashboardTransfer from "./pages/DashboardPage/DashboardTransfer/DashboardTransfer";
import DashboardHistory from "./pages/DashboardPage/DashboardHistory/DashboardHistory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<Layout />}>
            <Route index element={<DashboardProfile />} />
            <Route path="/profile" element={<DashboardProfile />} />
            <Route path="/transfers" element={<DashboardTransfer />} />
            <Route path="/history" element={<DashboardHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
