import { Typography } from "antd";
import { Link } from "react-router-dom";

function ModeSwitch({
  onClick,
  switchText,
}: {
  onClick?: () => void;
  switchText: string;
}) {
  return (
    <div className={"flex justify-between"}>
      <Typography.Link onClick={onClick}>{switchText}</Typography.Link>
      <Link to={"./forget-password"}>
        <Typography.Link>忘记密码？</Typography.Link>
      </Link>
    </div>
  );
}

export default ModeSwitch;
