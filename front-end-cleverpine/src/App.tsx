import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./Layout";
import DashboardProfile from "./pages/DashboardPage/components/DashboardProfile";
import DashboardTransfer from "./pages/DashboardPage/components/DashboardTransfer";
import DashboardHistory from "./pages/DashboardPage/components/DashboardHistory";

function App() {
  return (
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
  );
}

export default App;
