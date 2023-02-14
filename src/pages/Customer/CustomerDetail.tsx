import FxDrawer from "src/components/FxDrawer";
import type Types from "src/types";
import CreateOrder from "src/pages/Order/CreateOrder";
import { Button, Col, Form, Input, Row, Space, Typography } from "antd";
import { customerFormItems } from "src/pages/Customer/CreateCustomer";
import { useState } from "react";
import CollectionManagement from "src/pages/Customer/CollectionManagement/CollectionManagement";

function CustomerDetail({ ...drawer }: Types["drawer"]) {
  return (
    <FxDrawer
      {...drawer}
      title={"客户详情"}
      width={830}
      extra={<CreateOrder primaryButton />}
    >
      <BasicInfo />
      <CollectionManagement />
    </FxDrawer>
  );
}

export default CustomerDetail;

const ButtonWidth = 95;
function BasicInfo() {
  const [editable, setEditable] = useState(false);
  return (
    <Form layout={"vertical"}>
      <div className="flex justify-between items-center mb-6">
        <Typography.Title level={3}>基础信息</Typography.Title>
        {editable ? (
          <Space>
            <Button
              size={"small"}
              style={{ width: ButtonWidth }}
              onClick={() => {
                setEditable(false);
              }}
            >
              取消
            </Button>
            <Button
              type={"primary"}
              size={"small"}
              ghost
              style={{ width: ButtonWidth }}
            >
              保存
            </Button>
          </Space>
        ) : (
          <Button
            size={"small"}
            ghost
            type={"primary"}
            style={{ width: ButtonWidth }}
            onClick={() => {
              setEditable(true);
            }}
            htmlType={"button"}
          >
            编辑
          </Button>
        )}
      </div>
      <Row gutter={24}>
        {customerFormItems.map((item) => {
          return (
            <Col key={item.name} span={12}>
              <Form.Item {...item}>
                <Input placeholder={"请输入"} disabled={!editable} />
              </Form.Item>
            </Col>
          );
        })}
      </Row>
    </Form>
  );
}
