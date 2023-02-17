import type { PopoverProps } from "antd";
import { Popover } from "antd";
import type { ComponentProps } from "react";
import classNames from "classnames";
import Icon from "src/components/icon/index";

function FxPopup({ ...props }: Omit<PopoverProps, "title">) {
  return <Popover placement={"bottom"} showArrow={false} {...props} />;
}

export default FxPopup;

type OptionProps = {
  label?: string;
  value: string;
  subOptions?: OptionProps[];
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
      getPopupContainer={(node) => node}
      overlayInnerStyle={{
        ...overlayInnerStyle,
        paddingLeft: 0,
        paddingRight: 0,
      }}
      content={
        <ul style={{ width: 160 }}>
          {options.map((option) => {
            return <Option {...option} key={option.value} onClick={onSelect} />;
          })}
        </ul>
      }
      {...props}
    />
  );
}

function Option({
  label,
  value,
  subOptions,
  onClick,
}: OptionProps & { onClick?: (value: string) => void }) {
  const commonCLs =
    "py-2 px-4 hover:font-bold hover:bg-primary hover:bg-opacity-5 hover:cursor-pointer";
  const text = label ?? value;
  if (subOptions && subOptions.length > 0) {
    return (
      <FxOptionsPopUp
        options={subOptions}
        placement={"rightTop"}
        overlayStyle={{ paddingLeft: 0 }}
        overlayInnerStyle={{ marginLeft: -4 }}
        onSelect={onClick}
      >
        <li className={classNames(commonCLs, "flex-between")}>
          {text}
          <Icon name={"prev"} />
        </li>
      </FxOptionsPopUp>
    );
  }
  return (
    <li
      className={commonCLs}
      onClick={() => {
        onClick?.(value);
      }}
    >
      {text}
    </li>
  );
}
