import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginWrapper from "src/wrapper/Login/LoginWrapper";
import SignIn from "src/pages/Login/SignIn/index";
import ForgetPassword from "src/pages/Login/ForgetPassword/ForgetPassword";
import Register from "src/pages/Login/Register";

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
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
