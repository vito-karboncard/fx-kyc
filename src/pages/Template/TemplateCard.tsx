import classNames from "classnames";
import type { ReactNode } from "react";
import { Typography } from "antd";
import TemplateIcon from "src/assets/template-icon.svg";
import TemplateAddIcon from "src/assets/template-add-icon.svg";
import Options from "src/components/Options";
import { useState } from "react";
import Icon from "src/components/icon/index";
import { FxTitle } from "src/components/FxTypograph";

function Template({
  icon,
  children,
  primary,
  isHovering,
  onClick,
}: {
  icon?: ReactNode;
  children?: ReactNode;
  primary?: boolean;
  isHovering?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className={classNames(
        "h-[100px] rounded-2xl border-solid border  flex items-center p-6 hover:cursor-pointer hover:border-primary transition-all",
        primary && "border-none bg-primary bg-opacity-5 hover:bg-opacity-10",
        isHovering ? "border-primary" : "border-gray-border"
      )}
      onClick={onClick}
    >
      <div className="mr-4 w-10 h-10">{icon}</div>
      <div className={"flex-grow"}>{children}</div>
    </div>
  );
}

const options = [
  ["编辑", "edit"],
  ["预览", "preview"],
  ["新建收集信息请求", "new"],
  ["重命名", "rename"],
  ["删除", "delete"],
];
function TemplateCard({ title }: { title: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Template icon={<img src={TemplateIcon} alt="" />} isHovering={open}>
      <div className="flex-between">
        <FxTitle level={3} inherit>
          {title}
        </FxTitle>
        <Options
          options={options.map((i) => ({ label: i[0], value: i[1] }))}
          onOpenChange={setOpen}
        />
      </div>
    </Template>
  );
}
export const AddTemplateCard = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Template
      icon={<img src={TemplateAddIcon} alt="" />}
      primary
      onClick={onClick}
    >
      <div className="flex-between">
        <Typography.Title level={3}>新建空白模版</Typography.Title>
        <Icon name={"cross"} size={14} />
      </div>
    </Template>
  );
};

export default TemplateCard;
