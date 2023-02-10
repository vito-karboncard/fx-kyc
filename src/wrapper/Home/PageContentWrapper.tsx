import type { ReactNode } from "react";
import classNames from "classnames";

function PageContentWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={classNames("w-5/6 m-auto relative", className)}>
      {children}
    </div>
  );
}

export default PageContentWrapper;
