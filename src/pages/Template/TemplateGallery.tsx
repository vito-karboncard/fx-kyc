import { Col, Row, Typography } from "antd";
import TemplateCard, { AddTemplateCard } from "src/pages/Template/TemplateCard";

function TemplateGallery() {
  return (
    <div>
      <Typography.Title>我的模版</Typography.Title>
      <Row gutter={[24, 24]} className={"mt-6"}>
        <Col span={8}>
          <AddTemplateCard />
        </Col>
        <Col span={8}>
          <TemplateCard title={"公司注册"} />
        </Col>
        <Col span={8}>
          <TemplateCard title={"公司注册"} />
        </Col>
        <Col span={8}>
          <TemplateCard title={"公司注册"} />
        </Col>
      </Row>
    </div>
  );
}

export default TemplateGallery;
