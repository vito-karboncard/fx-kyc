import type { CSSProperties } from "react";
import type React from "react";
import classes from "./style.module.scss";
import classNames from "classnames";
import type { IconTypes } from "./icon-types";
import "./iconfont-svg.js";

interface Props {
  className?: string;
  style?: CSSProperties;
  size?: number;
  name: IconTypes;
  leadingNone?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseOver?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

const Icon = ({
  onClick,
  name,
  className,
  leadingNone = true,
  size,
  style,
  onMouseOver,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const wrapperStyle: CSSProperties = {
    ...style,
    fontSize: size && `${size}px`,
  };
  return (
    <span
      className={classNames(
        classes.iconWrapper,
        className,
        leadingNone && "leading-none",
        onClick && "cursor-pointer"
      )}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={wrapperStyle}
    >
      <svg className={classes.icon} aria-hidden="true">
        <use xlinkHref={`#${name}`}></use>
      </svg>
    </span>
  );
};

export default Icon;
