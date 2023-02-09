import type { ReactNode } from "react";

function Box({ children }: { children: ReactNode }) {
  return <div className={"w-[420px]"}>{children}</div>;
}

export default Box;
