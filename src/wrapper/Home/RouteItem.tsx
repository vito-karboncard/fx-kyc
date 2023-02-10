import type { IconTypes } from "src/components/icon/icon-types";
import { Link } from "react-router-dom";
import Icon from "src/components/icon/index";
import { Typography } from "antd";
import Style from "./route-item.module.scss";
import classNames from "classnames";

const RouteItem = ({
  icon,
  name,
  path,
  current,
}: {
  icon: IconTypes;
  name: string;
  current?: boolean;
  path: string;
}) => {
  return (
    <Link
      className={classNames(Style.routeItem, current && Style.current)}
      to={path}
    >
      <Icon name={icon} className={"mr-3"} />
      <Typography.Text>{name}</Typography.Text>
    </Link>
  );
};

export default RouteItem;
