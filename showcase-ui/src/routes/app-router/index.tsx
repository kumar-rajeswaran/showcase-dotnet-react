import { AppLoader } from "components";
import Dashboard from "containers/dashboard";
import Home from "containers/home";
import Login from "containers/login";
import Profile from "containers/profile";
import { MainLayout } from "layouts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <>
      <AppLoader />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="me" element={<MainLayout />}>
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
