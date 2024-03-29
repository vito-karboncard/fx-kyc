import type { ReactNode } from "react";
import { useEffect, useMemo } from "react";
import { Form, Input, message, Space } from "antd";
import utils from "src/utils";

function EditFileName({
  icon,
  name,
  editable,
  onChange,
}: {
  icon?: ReactNode;
  name: string;
  editable?: boolean;
  onChange?: (name: string) => void;
}) {
  const [form] = Form.useForm();
  const { fileType, fileName } = useMemo(() => {
    const split = name.split(/\.(\w+)$/);
    return {
      fileName: split[0],
      fileType: split[1],
    };
  }, [name]);
  useEffect(() => {
    form.setFieldValue("name", fileName);
  }, [form, fileName]);
  return (
    <Form component={false} form={form}>
      <div className={"flex items-center flex-grow pr-2"}>
        {icon && <div className="mr-2">{icon}</div>}
        {!editable ? (
          name
        ) : (
          <div className="flex items-center flex-grow">
            <Form.Item
              name={"name"}
              noStyle
              rules={[utils.formValidator.requiredRule]}
              validateFirst
            >
              <Input
                size={"small"}
                autoFocus
                onBlur={() => {
                  form
                    .validateFields()
                    .then(() => {
                      onChange?.(
                        `${form.getFieldValue("name") as string}${
                          fileType && "." + fileType
                        }`
                      );
                    })
                    .catch(({ errorFields }) => {
                      message.error(errorFields[0]?.errors?.[0]);
                    });
                }}
              />
            </Form.Item>
            {fileType && <span>.{fileType}</span>}
          </div>
        )}
      </div>
    </Form>
  );
}

export default EditFileName;
