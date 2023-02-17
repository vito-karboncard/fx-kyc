import { Typography } from "antd";
import type CollectionTypes from "src/pages/Template/types";
import { useMemo } from "react";
import CollectionItemControl from "src/pages/Template/components/CollectionItemControl";

function TemplateCategory({
  collection,
}: {
  collection: CollectionTypes["Collection"];
}) {
  return (
    <div>
      <Typography.Title level={3} className={"mb-2"}>
        {collection.label}
      </Typography.Title>
      <div className="rounded-xl border border-solid border-gray-border p-6 grid grid-cols-1 gap-6">
        {collection.children?.map((collection, index) => {
          if (collection.type === "item") {
            return (
              <CollectionItemControl
                collection={collection}
                key={collection.uuid ?? index}
              />
            );
          }
          return (
            <SubCategory
              key={collection.uuid ?? index}
              collection={collection}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TemplateCategory;

const SubCategory = ({
  collection,
}: {
  collection: CollectionTypes["Collection"];
}) => {
  const hasItems = useMemo(() => {
    return collection.children?.every((item) => item.type === "item");
  }, [collection.children]);
  return (
    <div className={"grid grid-cols-1 gap-6"}>
      <Typography.Text strong>{collection.label}</Typography.Text>
      {hasItems &&
        collection.children?.map((collection, index) => {
          return (
            <CollectionItemControl
              collection={collection}
              key={collection.uuid ?? index}
            />
          );
        })}
    </div>
  );
};
