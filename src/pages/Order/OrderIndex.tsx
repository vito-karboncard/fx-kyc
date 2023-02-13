import HomePageContentWrapper from "src/wrapper/Home/HomePageContentWrapper";
import { Button, Form, Input, Table } from "antd";
import Icon from "src/components/icon/index";
import useOrderColumns from "src/pages/Order/useOrderColumns";
import mockData, { detailData } from "src/pages/Order/mockData";
import useModalControl from "src/hooks/useModalControl";
import { OrderDetailDrawer } from "src/pages/Order/OrderDetail";
import { useState } from "react";
import type OrderTypes from "src/pages/Order/types";

function OrderIndex() {
  const [orderDetail, setOrderDetail] = useState<OrderTypes["Order"]>(
    detailData()
  );
  const { columns } = useOrderColumns();
  const drawer = useModalControl();
  return (
    <HomePageContentWrapper>
      <SearchBar />
      <Table
        columns={columns}
        dataSource={mockData.data}
        onRow={() => ({
          onClick: () => {
            const mockData = detailData();
            console.log("-> mockData", mockData);
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

const SearchBar = () => {
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
      <Button
        icon={<Icon name={"cross"} className={"mr-1"} size={12} />}
        style={{ paddingLeft: 16, paddingRight: 16 }}
      >
        新增
      </Button>
    </div>
  );
};

export default OrderIndex;
