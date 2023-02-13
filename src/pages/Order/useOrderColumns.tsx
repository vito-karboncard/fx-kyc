import type { ColumnsType } from "antd/es/table/index";
import dayjs from "dayjs";
import type OrderTypes from "src/pages/Order/types";
import type { OrderType } from "src/pages/Order/types";
import { OrderStatus } from "src/pages/Order/types";
import orderHelps from "src/pages/Order/orderHelps";

export const orderStatusMap: Record<
  OrderStatus,
  { name: string; color: string }
> = {
  [OrderStatus.waiting]: {
    name: "待处理",
    color: "text-warning",
  },
  [OrderStatus.pending]: {
    name: "进行中",
    color: "text-primary",
  },
  [OrderStatus.success]: {
    name: "完成",
    color: "text-success",
  },
  [OrderStatus.cancel]: {
    name: "取消",
    color: "text-error",
  },
};
function useOrderColumns() {
  const columns: ColumnsType<OrderTypes["Order"]> = [
    {
      title: "客户名",
      dataIndex: "customerName",
    },
    {
      title: "创建时间",
      dataIndex: "orderCreatedDt",
      render: (text) => dayjs(text).format("YYYY-DD-MM HH:mm"),
    },
    {
      title: "订单类型",
      dataIndex: "type",
      render: (v: OrderType) => orderHelps.orderTypeMap[v],
    },

    {
      title: "状态",
      dataIndex: "status",
      align: "right",
      render: (value: OrderStatus) => {
        const mapObj = orderStatusMap[value];
        return <span className={mapObj.color}>{mapObj.name}</span>;
      },
    },
  ];

  return {
    columns,
  };
}

export default useOrderColumns;
