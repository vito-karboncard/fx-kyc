import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "src/pages/Login/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
