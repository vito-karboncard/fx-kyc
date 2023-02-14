import type { ReactNode } from "react";
import Style from "src/features/EditFile/style.module.scss";

function ItemWrapper({
  leftNode,
  rightNode,
}: {
  leftNode: ReactNode;
  rightNode?: ReactNode;
}) {
  return (
    <li className={Style.fileItem}>
      {leftNode}
      {rightNode}
    </li>
  );
}

export default ItemWrapper;
