import HomePageContentWrapper from "src/wrapper/Home/HomePageContentWrapper";
import { SearchBar } from "../Order/OrderIndex";
import type { ColumnsType } from "antd/es/table/index";
import type CustomerTypes from "src/pages/Customer/types";
import { Table } from "antd";
import mockData from "src/pages/Customer/mockData";
import CreateCustomer from "src/pages/Customer/CreateCustomer";
import { useState } from "react";
import useDrawerControl from "src/hooks/useDrawerControl";
import CustomerDetail from "src/pages/Customer/CustomerDetail";

export const customerDataColumns: ColumnsType<CustomerTypes["Customer"]> = [
  {
    title: "客户名",
    dataIndex: "name",
  },
  {
    title: "注册国家",
    dataIndex: "countryOfRegistration",
  },
  {
    title: "注册地区",
    dataIndex: "areaOfRegistration",
  },
  {
    title: "客户经理",
    dataIndex: "managerName",
    align: "right",
  },
];
function CustomerIndex() {
  const [customer, setCustomer] = useState<CustomerTypes["Customer"]>();
  const drawer = useDrawerControl();

  return (
    <HomePageContentWrapper>
      <SearchBar rightNode={<CreateCustomer />} />
      <Table
        columns={customerDataColumns}
        dataSource={mockData.listData.data}
        onRow={(record) => ({
          onClick() {
            setCustomer(record);
            drawer.onOpen();
          },
        })}
      />
      <CustomerDetail {...drawer} />
    </HomePageContentWrapper>
  );
}

export default CustomerIndex;
