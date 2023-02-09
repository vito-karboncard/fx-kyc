import Style from "./style.module.scss";
import FxBanner from "src/assets/fx-banner.svg";
import { Typography } from "antd";
import SignIn from "src/pages/Login/SignIn/index";

function LoginPage() {
  return (
    <div className={Style.container}>
      <div className={Style.bg}>
        <img src={FxBanner} alt="" className={"mb-[108px]"} />
        <Typography.Title level={1} style={{ fontSize: 40 }}>
          让您的业务全球化
        </Typography.Title>
      </div>
      <div className={"h-full flex justify-center items-center"}>
        <SignIn />
      </div>
    </div>
  );
}

export default LoginPage;
