import type { InputProps } from "antd";
import { Input } from "antd";
import Icon from "src/components/icon/index";

function SearchInput(props: InputProps) {
  return (
    <Input
      placeholder={"搜索"}
      style={{ width: 295 }}
      prefix={<Icon name={"query"} />}
      {...props}
    />
  );
}

export default SearchInput;
