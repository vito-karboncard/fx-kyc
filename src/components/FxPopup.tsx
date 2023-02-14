import type { PopoverProps } from "antd";
import { Popover } from "antd";
import type { ComponentProps } from "react";

function FxPopup({ ...props }: Omit<PopoverProps, "title">) {
  return <Popover placement={"bottom"} showArrow={false} {...props} />;
}

export default FxPopup;

type OptionProps = {
  label?: string;
  value: string;
};
export function FxOptionsPopUp({
  options,
  overlayInnerStyle,
  onSelect,
  ...props
}: Omit<ComponentProps<typeof FxPopup>, "content"> & {
  options: OptionProps[];
  onSelect?: (v: string) => void;
}) {
  return (
    <FxPopup
      {...props}
      overlayInnerStyle={{
        ...overlayInnerStyle,
        paddingLeft: 0,
        paddingRight: 0,
      }}
      content={
        <ul style={{ width: 160 }}>
          {options.map((option) => {
            return (
              <Option
                {...option}
                key={option.value}
                onClick={() => {
                  onSelect?.(option.value);
                }}
              />
            );
          })}
        </ul>
      }
    />
  );
}

function Option({
  label,
  value,
  onClick,
}: OptionProps & { onClick?: () => void }) {
  return (
    <li
      className={
        "py-2 px-4 hover:font-bold hover:bg-primary hover:bg-opacity-5 hover:cursor-pointer"
      }
      onClick={() => {
        onClick?.();
      }}
    >
      {label ?? value}
    </li>
  );
}
