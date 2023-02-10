import Style from "src/wrapper/Login/style.module.scss";
import { Typography } from "antd";
import { Outlet } from "react-router-dom";
import Logo from "src/components/Logo";

function LoginWrapper() {
  return (
    <div className={Style.container}>
      <div className={Style.bg}>
        <Logo className={"mb-[108px]"} />
        <Typography.Title level={1} style={{ fontSize: 40 }}>
          让您的业务全球化
        </Typography.Title>
      </div>
      <div className={"h-full flex justify-center items-center"}>
        <Outlet />
      </div>
    </div>
  );
}

export default LoginWrapper;
