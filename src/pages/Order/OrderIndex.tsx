import HomePageContentWrapper from "src/wrapper/Home/HomePageContentWrapper";
import { Form, Input, Table } from "antd";
import Icon from "src/components/icon/index";
import useOrderColumns from "src/pages/Order/useOrderColumns";
import mockData, { detailData } from "src/pages/Order/mockData";
import { OrderDetailDrawer } from "src/pages/Order/OrderDetail";
import type { ReactNode } from "react";
import { useState } from "react";
import type OrderTypes from "src/pages/Order/types";
import CreateOrder from "src/pages/Order/CreateOrder";
import useDrawerControl from "src/hooks/useDrawerControl";

function OrderIndex() {
  const [orderDetail, setOrderDetail] = useState<OrderTypes["Order"]>(
    detailData()
  );
  const { columns } = useOrderColumns();
  const drawer = useDrawerControl();
  return (
    <HomePageContentWrapper>
      <SearchBar rightNode={<CreateOrder />} />
      <Table
        rowKey={"uuid"}
        columns={columns}
        dataSource={mockData.data}
        onRow={() => ({
          onClick: () => {
            const mockData = detailData();
            setOrderDetail(mockData);
            drawer.onOpen();
          },
        })}
      />
      <OrderDetailDrawer
        open={drawer.open}
        onClose={drawer.onClose}
        order={orderDetail}
      />
    </HomePageContentWrapper>
  );
}

export const SearchBar = ({ rightNode }: { rightNode?: ReactNode }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <Form>
        <Form.Item noStyle name={"search"}>
          <Input
            placeholder={"搜索"}
            prefix={<Icon name={"share"} className={"mr-2"} />}
            style={{ width: 295 }}
          />
        </Form.Item>
      </Form>
      {rightNode}
    </div>
  );
};

export default OrderIndex;
