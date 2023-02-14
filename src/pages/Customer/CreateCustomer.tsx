import FxModal from "src/components/FxModal";
import useModalControl from "src/hooks/useModalControl";
import { Form, Input } from "antd";
import type CustomerTypes from "src/pages/Customer/types";
import { CreateButton } from "src/pages/Order/CreateOrder";
import type Types from "src/types";
export const customerFormItems: Array<{
  label: string;
  name: keyof CustomerTypes["Customer"];
}> = [
  {
    label: "客户名",
    name: "name",
  },
  {
    label: "注册国家",
    name: "countryOfRegistration",
  },
  {
    label: "注册地区",
    name: "areaOfRegistration",
  },
  {
    label: "客户经理",
    name: "managerName",
  },
];
function CreateCustomerModal({ ...modal }: Types["modal"]) {
  return (
    <FxModal title={"新建客户"} {...modal} footer={false}>
      <Form layout={"vertical"}>
        {customerFormItems.map((item) => {
          return (
            <Form.Item {...item} key={item.name}>
              <Input placeholder={"请输入"} />
            </Form.Item>
          );
        })}
        <FxModal.DeFaultFooter
          okText={"创建"}
          okButtonProps={{ htmlType: "submit" }}
        />
      </Form>
    </FxModal>
  );
}
function CreateCustomer() {
  const modal = useModalControl();
  return (
    <>
      <CreateButton onClick={modal.onOpen} />
      <CreateCustomerModal {...modal} />
    </>
  );
}

export default CreateCustomer;
