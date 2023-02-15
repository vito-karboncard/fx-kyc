import { Typography } from "antd";
import type { TitleProps } from "antd/es/typography/Title";
import type { TextProps } from "antd/es/typography/Text";
import classNames from "classnames";

type CustomProps = {
  inherit?: boolean;
  primary?: boolean;
};

const useCustomColor = ({ inherit, primary }: CustomProps) => {
  return inherit ? "text-inherit" : primary ? "text-primary" : undefined;
};
export function FxTitle({
  inherit,
  primary,
  className,
  ...props
}: TitleProps & CustomProps) {
  const color = useCustomColor({ inherit, primary });
  return (
    <Typography.Title className={classNames(className, color)} {...props} />
  );
}

export function FxText({
  inherit,
  primary,
  className,
  ...props
}: TextProps & CustomProps) {
  const color = useCustomColor({ inherit, primary });
  return (
    <Typography.Text className={classNames(className, color)} {...props} />
  );
}
