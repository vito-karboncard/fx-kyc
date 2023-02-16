import HomePageContentWrapper from "src/wrapper/Home/HomePageContentWrapper";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import templateUtils from "src/pages/Template/utils";
import { Button, Space } from "antd";
type TemplateType = keyof typeof templateUtils.templateTypeMap;
function TemplateFile() {
  const { title } = useTemplateType();
  return (
    <HomePageContentWrapper
      bottomBorder
      pageTitle={title}
      customActions={<Operations />}
    >
      new
    </HomePageContentWrapper>
  );
}

export default TemplateFile;

const useTemplateType = () => {
  const { state } = useLocation();
  const [templateType, setTemplateType] = useState<TemplateType>(
    state?.type || "new"
  );

  return {
    type: templateType,
    setTemplateType,
    title: templateUtils.templateTypeMap[templateType],
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
