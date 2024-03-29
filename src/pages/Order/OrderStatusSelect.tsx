import type { SelectProps } from "antd";
import { orderStatusMap } from "src/pages/Order/useOrderColumns";
import type { IconTypes } from "src/components/icon/icon-types";
import Icon from "src/components/icon/index";
import { OrderStatus } from "src/pages/Order/types";
import FxSelect from "src/components/FxSelect";

const IconMap: Record<OrderStatus, IconTypes> = {
  [OrderStatus.pending]: "pending-fill",
  [OrderStatus.waiting]: "warning-fill",
  [OrderStatus.success]: "success-fill",
  [OrderStatus.cancel]: "close-fill",
};
const StatusText = ({ type }: { type: OrderStatus }) => {
  const mapObj = orderStatusMap[type];
  return (
    <div className="flex items-center">
      <Icon name={IconMap[type]} size={18} />
      <span className={"ml-3"}>{mapObj.name}</span>
    </div>
  );
};
const statusOptions: SelectProps["options"] = [
  OrderStatus.pending,
  OrderStatus.waiting,
  OrderStatus.success,
  OrderStatus.cancel,
].map((type) => ({
  value: type,
  label: <StatusText type={type} />,
  key: type,
}));

function OrderStatusSelect({ ...props }: Omit<SelectProps, "options">) {
  return <FxSelect {...props} options={statusOptions} />;
}

export default OrderStatusSelect;
