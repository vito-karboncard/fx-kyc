import Style from "./style.module.scss";
import FxBanner from "src/assets/fx-banner.svg";
function LoginPage() {
  return (
    <div className={Style.container}>
      <div className={Style.bg}>
        <img src={FxBanner} alt="" />
      </div>
      <div className={"h-full flex justify-center items-center"}>content</div>
    </div>
  );
}

export default LoginPage;
