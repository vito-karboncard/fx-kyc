import Style from "./style.module.scss";
import EditFileName from "src/features/EditFile/EditFileName";
import ItemWrapper from "src/features/EditFile/ItemWrapper";
import Operations from "src/features/EditFile/Operations";
import { useState } from "react";
import Icon from "src/components/icon/index";

type EditCollectionData = {
  id: string;
  name: string;
};

type EditEvents = {
  onRename?: (data: {
    id: EditCollectionData["id"];
    newName: string;
  }) => Promise<void>;
  onDelete?: (id: string) => void;
  onOpen?: (id: string) => void;
  onCreate?: (name: string) => Promise<void>;
};

export function EditCollectionList({
  onRename,
  onDelete,
  onOpen,
  onCreate,
  collections,
  addCollection,
}: EditEvents & {
  collections?: EditCollectionData[];
  addCollection?: boolean;
}) {
  return (
    <ul className={Style.fileList}>
      {collections?.map((collection) => {
        return (
          <EditCollectionItem
            onRename={onRename}
            onDelete={onDelete}
            onOpen={onOpen}
            data={collection}
            key={collection.id}
          />
        );
      })}
      {addCollection && (
        <EditCollectionItem data={{ id: "", name: "" }} onCreate={onCreate} />
      )}
    </ul>
  );
}

export function EditCollectionItem({
  onRename,
  onDelete,
  onOpen,
  onCreate,
  data,
}: EditEvents & { data?: EditCollectionData }) {
  const [editable, setEditable] = useState(false);
  return (
    <ItemWrapper
      leftNode={
        <EditFileName
          icon={<Icon name={"wallet"} className={"text-primary"} />}
          name={data?.name ?? ""}
          editable={editable || Boolean(!data?.id)}
          onChange={(name) => {
            if (data?.id) {
              onRename?.({ id: data.id, newName: name }).then(() => {
                setEditable(false);
              });
            } else {
              onCreate?.(name).then(() => {
                setEditable(false);
              });
            }
          }}
        />
      }
      rightNode={
        data?.id && (
          <Operations
            options={[
              { label: "打开", value: "open" },
              { label: "重命名", value: "rename" },
              { label: "删除", value: "delete" },
            ]}
            onOperation={(v) => {
              if (v === "rename") {
                setEditable(true);
              } else if (v === "delete") {
                data?.id && onDelete?.(data.id);
              } else if (v === "open") {
                data?.id && onOpen?.(data.id);
              }
            }}
          />
        )
      }
    />
  );
}
