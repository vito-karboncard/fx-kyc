import type { ButtonProps } from "antd";
import { Button, Typography } from "antd";
import Icon from "src/components/icon/index";
import { EditCollectionList } from "src/features/EditFile/EditCollection";
import { useState } from "react";

function CollectionManagement() {
  return <CollectionList />;
}

export default CollectionManagement;

function CollectionList() {
  const [addCollection, setAddCollection] = useState(false);
  return (
    <div>
      <div className="flex-between mb-6">
        <Typography.Title level={3}>资料库</Typography.Title>
        <DashButton
          onClick={() => {
            setAddCollection(true);
          }}
        >
          新建文件夹
        </DashButton>
      </div>
      <EditCollectionList
        addCollection={addCollection}
        onCreate={async () => {
          setAddCollection(false);
        }}
        collections={[{ id: "1", name: "文件夹1" }]}
      />
    </div>
  );
}

function DashButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      type={"primary"}
      ghost
      size={"small"}
      icon={<Icon name={"cross"} className={"mr-1"} />}
      style={{ width: 108 }}
      className={"border-dashed"}
    />
  );
}
