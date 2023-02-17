import { Typography } from "antd";

function TemplateTitle({ title }: { title: string }) {
  return (
    <Typography.Title
      level={1}
      className={"pb-4 border-0 border-b border-solid border-gray-border"}
    >
      {title}
    </Typography.Title>
  );
}

export default TemplateTitle;
