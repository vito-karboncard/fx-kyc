export type CollectionType = "template" | "category" | "item";
export type CollectionItemType = "paragraph" | "sentence" | "remark" | "files";
export type File = {
  uuid: string;
  filename: string;
  size: number;
  url: string;
};
type Collection = {
  uuid: string;
  label: string;
  type: CollectionType;
  children: Collection[] | null;
};

type CollectionItem = {
  uuid: string;
  type: CollectionItemType;
  value: string | null;
  fileList: File[] | null;
  collectionUuid: string;
  createdAt: string;
};

type CollectionTypes = {
  Collection: Collection;
  CollectionItem: CollectionItem;
};

export default CollectionTypes;
