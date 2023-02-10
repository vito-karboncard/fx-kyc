import { Link } from "react-router-dom";
import FxBanner from "src/assets/fx-banner.svg";
import classNames from "classnames";

function Logo({ className }: { className?: string }) {
  return (
    <Link to={"/"} className={classNames(className, "block")}>
      <img src={FxBanner} alt="" className={"w-full"} />
    </Link>
  );
}

export default Logo;
