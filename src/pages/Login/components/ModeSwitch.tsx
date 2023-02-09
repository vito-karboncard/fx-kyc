import { Typography } from "antd";

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
      <Typography.Link>忘记密码？</Typography.Link>
    </div>
  );
}

export default ModeSwitch;
