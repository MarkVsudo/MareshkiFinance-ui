import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./pages/Layout/Layout";
import DashboardProfile from "./pages/DashboardPage/DashboardProfile/DashboardProfile";
import DashboardTransfer from "./pages/DashboardPage/DashboardTransfer/DashboardTransfer";
import DashboardHistory from "./pages/DashboardPage/DashboardHistory/DashboardHistory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage/HomePage";
import HomeLayout from "./pages/Layout/HomeLayout";
import AboutPage from "./pages/AboutPage/AboutPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/profile" element={<DashboardProfile />} />
            <Route path="/transfers" element={<DashboardTransfer />} />
            <Route path="/history" element={<DashboardHistory />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
