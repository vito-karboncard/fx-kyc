import Style from "./style.module.scss";
import type { UploadFile } from "antd";
import ItemWrapper from "src/features/EditFile/ItemWrapper";
import EditFileName from "src/features/EditFile/EditFileName";
import { useState } from "react";
import Operations from "src/features/EditFile/Operations";
function EditFileList({ fileList }: { fileList?: UploadFile[] }) {
  const [editFileUid, setEditFileUid] = useState<string>();
  return (
    <ul className={Style.fileList}>
      {fileList?.map((file) => {
        return (
          <ItemWrapper
            key={file.uid}
            leftNode={
              <EditFileName
                name={file.fileName ?? ""}
                editable={editFileUid === file.uid}
                onChange={() => {
                  setEditFileUid(undefined);
                }}
              />
            }
            rightNode={
              <Operations
                options={[
                  { label: "下载", value: "download" },
                  { label: "重命名", value: "rename" },
                  { label: "删除", value: "delete" },
                ]}
                onOperation={(v) => {
                  if (v === "rename") {
                    setEditFileUid(file.uid);
                  }
                }}
              />
            }
          />
        );
      })}
    </ul>
  );
}

export default EditFileList;
