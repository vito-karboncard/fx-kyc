import { useTemplateDataCtx } from "src/pages/Template/DataProvider";
import TemplateTitle from "src/pages/Template/components/TemplateTitle";
import TemplateCategory from "src/pages/Template/components/TemplateCategory";

function TemplateArticle() {
  const { collectionTree } = useTemplateDataCtx();
  return (
    <div className="grid grid-cols-1 gap-6">
      <TemplateTitle title={collectionTree.label} />
      {collectionTree.children?.map((collection, index) => {
        return (
          <TemplateCategory
            collection={collection}
            key={collection.uuid ?? index}
          />
        );
      })}
    </div>
  );
}

export default TemplateArticle;
