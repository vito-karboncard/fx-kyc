import type CollectionTypes from "src/pages/Template/types";
import { Typography } from "antd";
import Icon from "src/components/icon/index";
const iconCls =
  "hover:text-primary text-color-tertiary transition cursor-pointer";
function CollectionItemRemark({
  item: { value },
}: {
  item: CollectionTypes["CollectionItem"];
}) {
  return (
    <div className={"flex items-center"}>
      <div className={"flex-grow pr-2"}>
        <Typography.Text type={"warning"}>{value}</Typography.Text>
      </div>
      <div className="inline-grid grid-flow-col gap-2 items-center hidden">
        <Icon name={"copy"} className={iconCls} />
        <Icon name={"close"} className={iconCls} />
        <span>1</span>
      </div>
    </div>
  );
}

export default CollectionItemRemark;

function AddCollectionItemRemark() {
  return (
    <>
      <Icon name={"cross"} className={iconCls} />
    </>
  );
}
