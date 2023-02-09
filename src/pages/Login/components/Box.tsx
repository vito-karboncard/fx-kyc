import type { ReactNode } from "react";
import classNames from "classnames";

function Box({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={classNames("w-[420px]", className)}>{children}</div>;
}

export default Box;
