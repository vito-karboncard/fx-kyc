import { theme } from "antd";
import type { ComponentProps } from "react";
import { useState } from "react";
import { FxOptionsPopUp } from "src/components/FxPopup";

function Options({
  options,
  onSelect,
  onOpenChange,
  isHovering,
  ...props
}: ComponentProps<typeof FxOptionsPopUp> & { isHovering?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <FxOptionsPopUp
      options={options}
      onOpenChange={(value) => {
        setOpen(value);
        onOpenChange?.(value);
      }}
      onSelect={onSelect}
      trigger={"click"}
      {...props}
    >
      <div className={"cursor-pointer inline-block"}>
        <DotSvg isHovering={isHovering ?? open} />
      </div>
    </FxOptionsPopUp>
  );
}

export default Options;

const Radius = 2;
const ContainerRect = {
  width: 24,
  height: 8,
};
const Gap = 3;
const { useToken } = theme;
const DotSvg = ({ isHovering }: { isHovering?: boolean }) => {
  const { token } = useToken();
  return (
    <svg {...ContainerRect} version="1.1" xmlns="http://www.w3.org/2000/svg">
      {new Array(3).fill(0).map((_, index) => {
        return (
          <circle
            key={index}
            r={Radius}
            cx={Radius + (Gap + Radius * 2) * index}
            cy={ContainerRect.height / 2}
            fill={isHovering ? token.colorPrimary : token.colorText}
          />
        );
      })}
    </svg>
  );
};
