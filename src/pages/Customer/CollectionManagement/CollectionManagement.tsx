import type { ButtonProps } from "antd";
import { Breadcrumb, Button, Typography, Upload } from "antd";
import Icon from "src/components/icon/index";
import { EditCollectionList } from "src/features/EditFile/EditCollection";
import { useState } from "react";
import EditFileList from "src/features/EditFile/EditFileList";
import mockData from "src/pages/Customer/mockData";

function CollectionManagement() {
  const [openCollection, setOpenCollection] = useState<string>();
  if (openCollection) {
    return (
      <FileList
        collectionName={openCollection}
        onBack={() => {
          setOpenCollection(undefined);
        }}
      />
    );
  }
  return (
    <CollectionList
      onOpen={() => {
        setOpenCollection("An Application");
      }}
    />
  );
}

export default CollectionManagement;
function FileList({
  collectionName,
  onBack,
}: {
  collectionName: string;
  onBack?: () => void;
}) {
  return (
    <div className={"mt-3"}>
      <div className="flex-between mb-6">
        <Breadcrumb>
          <Breadcrumb.Item
            className={"text-lg cursor-pointer"}
            onClick={onBack}
          >
            资料库
          </Breadcrumb.Item>
          <Breadcrumb.Item className={"font-bold text-lg"}>
            {collectionName}
          </Breadcrumb.Item>
        </Breadcrumb>
        <Upload showUploadList={false} multiple>
          <DashButton>新增上传</DashButton>
        </Upload>
      </div>
      <EditFileList fileList={mockData.fileList} />
    </div>
  );
}

function CollectionList({ onOpen }: { onOpen?: (v: string) => void }) {
  const [addCollection, setAddCollection] = useState(false);
  return (
    <div className={"mt-3"}>
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
        onOpen={onOpen}
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
