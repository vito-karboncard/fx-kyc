import type { DrawerProps } from "antd";
import { Drawer, Typography } from "antd";
import Icon from "src/components/icon/index";

function FxDrawer({ title, ...props }: DrawerProps) {
  return (
    <Drawer
      destroyOnClose
      closeIcon={<CloseIcon />}
      title={typeof title === "string" ? <CustomTitle title={title} /> : title}
      {...props}
    />
  );
}

const CloseIcon = () => {
  return (
    <div
      className={
        "bg-gray-bg w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer hover:bg-opacity-70 transition hover:text-opacity-70"
      }
    >
      <Icon name={"back"} size={24} className={"text-color"} />
    </div>
  );
};

const CustomTitle = ({ title }: { title: string }) => {
  return <Typography.Title level={3}>{title}</Typography.Title>;
};

export default FxDrawer;
