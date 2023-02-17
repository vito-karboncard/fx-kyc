import { theme, Typography } from "antd";
import { useTemplateDataCtx } from "src/pages/Template/DataProvider";
import type CollectionTypes from "src/pages/Template/types";
import Options from "src/components/Options";
import type { ComponentProps, ReactNode } from "react";
import { useRef, useState } from "react";
import { useHover } from "ahooks";
import classNames from "classnames";
import EditFileName from "src/features/EditFile/EditFileName";

const { useToken } = theme;
function SideNav() {
  const { token } = useToken();
  const { collectionTree } = useTemplateDataCtx();
  return (
    <ul
      className={"rounded-xl bg-white p-5 grid grid-cols-1 gap-2"}
      style={{ boxShadow: token.boxShadow }}
    >
      <EditableNavItem collection={collectionTree} collectionLevel={0} />
      {collectionTree?.children &&
        collectionTree.children.map((collection) => {
          return (
            <CollectionChild
              collection={collection}
              collectionLevel={1}
              key={collection.uuid}
            />
          );
        })}
    </ul>
  );
}

export default SideNav;

const collectionOptions = [
  ["重命名", "rename"],
  ["新建子分类", "newLevel"],
  ["新建条目", "newItem"],
  ["更改条目类型", "updateItem"],
  ["删除", "delete"],
];
const collectionItemOptions = [
  ["单行文本框", "singleInput"],
  ["多行文本框", "multipleInput"],
  ["上传文件", "upload"],
];
const CollectionChild = ({
  collection,
  collectionLevel,
}: {
  collection: CollectionTypes["Collection"];
  collectionLevel: number;
}) => {
  const { children } = collection;
  return (
    <ul className={"pl-[14px]"}>
      <EditableNavItem
        collection={collection}
        collectionLevel={collectionLevel}
      />
      {children &&
        children.length > 0 &&
        children.map((collection) => {
          return (
            <li key={collection.uuid}>
              <CollectionChild
                collection={collection}
                collectionLevel={collectionLevel + 1}
              />
            </li>
          );
        })}
    </ul>
  );
};

const RowItem = ({
  children,
  className,
}: {
  children: (isHovering: boolean) => ReactNode;
  className?: string;
}) => {
  const liRef = useRef<HTMLLIElement>(null);
  const isHovering = useHover(liRef);
  return (
    <li
      ref={liRef}
      className={classNames("relative cursor-pointer h-9", className)}
    >
      <div className="absolute inset-0 flex-between">
        {children(isHovering)}
      </div>
    </li>
  );
};

const EditableNavItem = ({
  collection: { type, label },
  collectionLevel,
  rowCls,
}: ComponentProps<typeof CollectionChild> & {
  rowCls?: string;
  onOption?: (v: string) => void;
}) => {
  const [titleEdit, setTitleEdit] = useState(false);

  return (
    <RowItem className={rowCls}>
      {(isHovering) => {
        return (
          <>
            {titleEdit ? (
              <EditFileName
                name={label}
                editable
                onChange={() => {
                  setTitleEdit(false);
                }}
              />
            ) : (
              <NavItemTitle
                type={type}
                collectionLevel={collectionLevel}
                label={label}
                isHovering={isHovering}
              />
            )}
            <div
              className={classNames(
                !isHovering && "invisible",
                titleEdit && "hidden",
                "relative"
              )}
            >
              <Options
                onSelect={(option) => {
                  if (option === "rename") {
                    setTitleEdit(true);
                  }
                }}
                isHovering={isHovering}
                options={collectionOptions
                  .filter(([_, value]) => {
                    if (value !== "rename" && collectionLevel === 0) {
                      return false;
                    }
                    if (value === "updateItem") {
                      return type === "item";
                    }
                    if (value === "newItem") {
                      return type === "category";
                    }
                    if (value === "newLevel") {
                      return collectionLevel === 1;
                    }
                    return true;
                  })
                  .map(([label, value]) => {
                    return {
                      label,
                      value,
                      subOptions:
                        value === "newItem" || value === "updateItem"
                          ? collectionItemOptions.map(([label, value]) => ({
                              label,
                              value,
                            }))
                          : undefined,
                    };
                  })}
              />
            </div>
          </>
        );
      }}
    </RowItem>
  );
};

const NavItemTitle = ({
  isHovering,
  collectionLevel,
  type,
  label,
}: {
  isHovering?: boolean;
  type: string;
  collectionLevel: number;
  label: string;
}) => {
  return (
    <Typography.Text
      className={classNames(
        isHovering
          ? "text-primary"
          : type === "item"
          ? "text-color-secondary"
          : undefined,
        collectionLevel <= 1 && "font-bold"
      )}
    >
      {label}
    </Typography.Text>
  );
};
