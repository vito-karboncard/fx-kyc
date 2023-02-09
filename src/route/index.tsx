import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginWrapper from "src/wrapper/Login/LoginWrapper";
import SignIn from "src/pages/Login/SignIn/index";
import ForgetPassword from "src/pages/Login/ForgetPassword/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} replace />,
  },
  {
    path: "/login",
    element: <LoginWrapper />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;
