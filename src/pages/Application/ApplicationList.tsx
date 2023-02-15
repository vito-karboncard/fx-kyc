import { Form } from "antd";
import SearchInput from "src/components/SearchInput";

function ApplicationList() {
  return (
    <div className={"mb-6"}>
      <Form component={false} className={"mb-6"}>
        <Form.Item name={"search"} noStyle>
          <SearchInput />
        </Form.Item>
      </Form>
    </div>
  );
}

export default ApplicationList;
