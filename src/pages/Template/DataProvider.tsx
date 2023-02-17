import type { ReactNode } from "react";
import type CollectionTypes from "src/pages/Template/types";
import { createContext, useCallback, useContext, useState } from "react";

type State = {
  collectionTree: CollectionTypes["Collection"];
  collectionItems: Array<CollectionTypes["CollectionItem"]>;
  updateCollectionTree: (data: CollectionTypes["Collection"]) => void;
  updateCollectionItem: (item: CollectionTypes["CollectionItem"]) => void;
  updateCollectionItems: (
    items: Array<CollectionTypes["CollectionItem"]>
  ) => void;
};
const initCollectionTree: State["collectionTree"] = {
  uuid: "",
  type: "template",
  label: "未命名模版",
  children: [
    {
      uuid: "1",
      type: "category",
      label: "子分类",
      children: [
        { uuid: "2", type: "item", label: "资料", children: null },
        {
          uuid: "3",
          type: "category",
          label: "子分类",
          children: [
            { uuid: "4", type: "item", label: "资料2", children: null },
          ],
        },
      ],
    },
    {
      uuid: "5",
      label: "子分类2",
      type: "category",
      children: null,
    },
  ],
};
const TemplateDataCtx = createContext<State>({
  collectionTree: initCollectionTree,
  collectionItems: [],
  updateCollectionTree: () => null,
  updateCollectionItem: () => null,
  updateCollectionItems: () => null,
});
export const useTemplateDataCtx = () => {
  return useContext(TemplateDataCtx);
};

function DataProvider({ children }: { children: ReactNode }) {
  const [collectionTree, setCollectionTree] =
    useState<State["collectionTree"]>(initCollectionTree);
  const [collectionItems, setCollectionItems] = useState<
    State["collectionItems"]
  >([]);
  const updateCollectionItem = useCallback(
    (item: CollectionTypes["CollectionItem"]) => {
      const itemIndex = collectionItems.findIndex((i) => i.uuid === item.uuid);
      if (itemIndex > -1) {
        setCollectionItems((prevState) => {
          return prevState.splice(itemIndex, 1, item);
        });
      }
    },
    [setCollectionItems, collectionItems]
  );
  return (
    <TemplateDataCtx.Provider
      value={{
        collectionItems,
        collectionTree,
        updateCollectionItem,
        updateCollectionTree: setCollectionTree,
        updateCollectionItems: setCollectionItems,
      }}
    >
      {children}
    </TemplateDataCtx.Provider>
  );
}

export default DataProvider;
