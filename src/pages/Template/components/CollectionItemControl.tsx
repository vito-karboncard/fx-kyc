import { Form, Input, Typography } from "antd";
import type CollectionTypes from "src/pages/Template/types";
import mockData from "src/pages/Template/mockData";
import CollectionItemRemark from "src/pages/Template/components/CollectionItemRemark";

function CollectionItemControl({
  collection,
}: {
  collection: CollectionTypes["Collection"];
}) {
  const item = mockData.remarkItem();
  return (
    <Form component={false}>
      <div className={"grid grid-cols-1 gap-2"}>
        <div className={"flex-between"}>
          <Typography.Text>{collection.label}</Typography.Text>
        </div>
        <CollectionItemRemark item={item} />
        <Form.Item noStyle>
          {<Input placeholder={"请输入"} disabled />}
        </Form.Item>
      </div>
    </Form>
  );
}

export default CollectionItemControl;
