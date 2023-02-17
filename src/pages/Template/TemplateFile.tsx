import HomePageContentWrapper from "src/wrapper/Home/HomePageContentWrapper";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import templateUtils from "src/pages/Template/utils";
import { Button, Space } from "antd";
import SideNav from "src/pages/Template/components/SideNav";
import DataProvider from "src/pages/Template/DataProvider";

type TemplateEditType = keyof typeof templateUtils.templateEditTypeMap;

function TemplateFile() {
  const { title } = useTemplateType();
  return (
    <DataProvider>
      <HomePageContentWrapper
        bottomBorder
        pageTitle={title}
        customActions={<Operations />}
      >
        <div className="relative flex">
          <div className={"w-[312px] mr-6"}>
            <SideNav />
          </div>
          <div className={"flex-grow"}>content123</div>
        </div>
      </HomePageContentWrapper>
    </DataProvider>
  );
}

export default TemplateFile;

const useTemplateType = () => {
  const { state } = useLocation();
  const [templateType, setTemplateType] = useState<TemplateEditType>(
    state?.type || "new"
  );

  return {
    type: templateType,
    setTemplateType,
    title: templateUtils.templateEditTypeMap[templateType],
  };
};

const Operations = () => {
  return (
    <Space size={16}>
      <Button>
        <span className="font-medium">取消</span>
      </Button>
      <Button type={"primary"}>
        <span className="font-medium">保存</span>
      </Button>
    </Space>
  );
};
