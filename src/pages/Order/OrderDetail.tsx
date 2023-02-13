import { Form, Input, Typography } from "antd";
import OrderStatusSelect from "src/pages/Order/OrderStatusSelect";
import type Types from "src/types";
import dayjs from "dayjs";
import FxDrawer from "src/components/FxDrawer";
import type OrderTypes from "src/pages/Order/types";
import { OrderType } from "src/pages/Order/types";
import { useMemo } from "react";

export type Order = OrderTypes["Order"];
function OrderDetail({ data }: { data: Order }) {
  const [form] = Form.useForm();
  return (
    <Form
      layout={"vertical"}
      form={form}
      initialValues={{
        status: data.status,
        note: data.remarks,
      }}
    >
      <Form.Item label={"订单状态"} name={"status"}>
        <OrderStatusSelect />
      </Form.Item>
      <InfoList data={data} />
      <Form.Item label={"备注"} name={"remarks"}>
        <Input.TextArea
          placeholder={"请输入"}
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
      </Form.Item>
    </Form>
  );
}

const InfoRenderList: Array<{
  label: string;
  render?: (v: Order[keyof Order], item: Order) => string;
  dataIndex: keyof Order;
  filterType?: Order["type"];
}> = [
  {
    label: "订单创建时间",
    dataIndex: "orderCreatedDt",
    render: (v: Order[keyof Order]) => dayjs(v).format("YYYY-MM-DD HH:mm"),
  },
  {
    label: "客户名",
    dataIndex: "customerName",
    filterType: OrderType.companyRegister,
  },
  {
    label: "公司注册地",
    dataIndex: "country",
    render: (_, order) => {
      return [
        order.country,
        order.state,
        order.city,
        order.county,
        order.address,
      ].join("");
    },
    filterType: OrderType.companyRegister,
  },
  {
    label: "年审到期时间",
    dataIndex: "annualVerificationExpiredDt",
    render: (v) => dayjs(v).format("YYYY-MM-DD HH:mm"),
    filterType: OrderType.annualReview,
  },
  {
    label: "账户要求",
    dataIndex: "bankAccountRemarks",
    filterType: OrderType.bankAccount,
  },
];
const InfoList = ({ data }: { data: Order }) => {
  const filterList = useMemo(() => {
    return InfoRenderList.filter(
      (i) => i.filterType === data.type || typeof i.filterType === "undefined"
    );
  }, [data.type]);
  return (
    <div className={"grid grid-cols-1 gap-3 my-7"}>
      {filterList.map((item) => {
        const renderContent =
          (item.render
            ? item.render(data[item.dataIndex], data)
            : data[item.dataIndex]) ?? "-------";
        return (
          <div className="flex justify-between" key={item.dataIndex}>
            <Typography.Text type={"secondary"}>{item.label}</Typography.Text>
            <Typography.Text style={{ maxWidth: 256 }}>
              {renderContent}
            </Typography.Text>
          </div>
        );
      })}
    </div>
  );
};

export default OrderDetail;

export const OrderDetailDrawer = ({
  open,
  onClose,
  order,
}: Types["drawer"] & { order: Order }) => {
  return (
    <FxDrawer open={open} onClose={onClose} title={"客户详情"} width={450}>
      <OrderDetail data={order} />
    </FxDrawer>
  );
};
