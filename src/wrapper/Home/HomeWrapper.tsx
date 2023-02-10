import { Outlet, useLocation } from "react-router-dom";
import Logo from "src/components/Logo";
import RouteItem from "src/wrapper/Home/RouteItem";
import type { ComponentProps } from "react";
import Style from "./home-wrapper.module.scss";

function HomeWrapper() {
  return (
    <div className={`h-full relative pl-[252px]`}>
      <SideBar />
      <div className={Style.contentContainer}>
        <Outlet />
      </div>
    </div>
  );
}

type RouteItemProps = ComponentProps<typeof RouteItem>;
export const NavRoutes: RouteItemProps[] = [
  {
    path: "/order",
    icon: "wallet",
    name: "订单",
  },
  {
    path: "/customer",
    icon: "add-user",
    name: "客户",
  },
];
const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`w-[252px] bg-gray-bg fixed top-0 bottom-0 left-0 overflow-y-auto px-6 pt-10`}
    >
      <Logo className={"w-[145px] mb-12"} />
      <div className={"grid grid-cols-1 gap-3 cursor-pointer"}>
        {NavRoutes.map((route) => {
          return (
            <RouteItem
              {...route}
              current={route.path === pathname}
              key={route.path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeWrapper;
