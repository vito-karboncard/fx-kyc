import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginWrapper from "src/wrapper/Login/LoginWrapper";
import SignIn from "src/pages/Login/SignIn/index";
import ForgetPassword from "src/pages/Login/ForgetPassword/ForgetPassword";
import Register from "src/pages/Login/Register";
import HomeWrapper from "src/wrapper/Home/HomeWrapper";
import OrderIndex from "src/pages/Order/OrderIndex";
import CustomerIndex from "src/pages/Customer/CustomerIndex";
import TeamIndex from "src/pages/Team/TeamIndex";
import ApplicationIndex from "src/pages/Application/ApplicationIndex";
import TemplateFile from "src/pages/Template/TemplateFile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        index: true,
        element: <Navigate to={"./order"} />,
      },
      {
        path: "order",
        element: <OrderIndex />,
        handle: {
          indexName: "订单",
          icon: "wallet",
        },
      },
      {
        path: "customer",
        element: <CustomerIndex />,
        handle: {
          indexName: "客户",
          icon: "add-user",
        },
      },
      {
        path: "team",
        element: <TeamIndex />,
      },
      {
        path: "application",
        children: [
          {
            index: true,
            element: <ApplicationIndex />,
          },
          {
            path: "template",
            element: <TemplateFile />,
          },
        ],
      },
    ],
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
