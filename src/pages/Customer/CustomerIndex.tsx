import HomePageContentWrapper from "src/wrapper/Home/HomePageContentWrapper";
import { SearchBar } from "../Order/OrderIndex";
import type { ColumnsType } from "antd/es/table/index";
import type CustomerTypes from "src/pages/Customer/types";
import { Table } from "antd";
import mockData from "src/pages/Customer/mockData";
import CreateCustomer from "src/pages/Customer/CreateCustomer";

function CustomerIndex() {
  const columns: ColumnsType<CustomerTypes["Customer"]> = [
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
  return (
    <HomePageContentWrapper>
      <SearchBar rightNode={<CreateCustomer />} />
      <Table columns={columns} dataSource={mockData.listData.data} />
    </HomePageContentWrapper>
  );
}

export default CustomerIndex;
