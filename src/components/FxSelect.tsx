import type { SelectProps } from "antd";
import { Select } from "antd";
import Icon from "src/components/icon/index";

function FxSelect(props: SelectProps) {
  return (
    <Select
      suffixIcon={
        <Icon
          name={"arrow-down"}
          size={16}
          className={"text-color-secondary"}
        />
      }
      {...props}
    />
  );
}

export default FxSelect;
