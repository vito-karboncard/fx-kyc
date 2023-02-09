import Box from "src/pages/Login/components/Box";
import { Button, Form, Input, Typography } from "antd";
import Icon from "src/components/icon/index";
import { Link } from "react-router-dom";
import utils from "src/utils/index";
import { useState } from "react";

function ForgetPasswordForm({ onSuccess }: { onSuccess?: () => void }) {
  return (
    <Form layout={"vertical"} onFinish={onSuccess}>
      <Form.Item name={"password"} rules={[utils.formValidator.passwordRule]}>
        <Input.Password placeholder={"设置您的登录密码"} />
      </Form.Item>
      <Form.Item
        name={"confirmPassword"}
        rules={[
          ({ getFieldValue }) => ({
            async validator(_, value) {
              if (value !== getFieldValue("password")) {
                throw new Error("密码不一致！");
              } else {
                await Promise.resolve();
              }
            },
          }),
        ]}
      >
        <Input.Password placeholder={"请再次输入您的登录密码"} />
      </Form.Item>
      <Button type={"primary"} size={"large"} block htmlType={"submit"}>
        下一步
      </Button>
    </Form>
  );
}

const SuccessNotification = () => {
  return (
    <Box className={"flex flex-col items-center"}>
      <Icon name={"success-fill"} className={"mb-5"} size={74} />
      <Typography.Title level={2}>重置密码成功</Typography.Title>
      <Button type={"primary"} block className={"mt-12"}>
        去登录
      </Button>
    </Box>
  );
};

const ForgetPassword = () => {
  const [success, setSuccess] = useState(false);
  if (!success) {
    return (
      <Box>
        <Link
          className="flex items-center text-inherit no-underline mb-8"
          to={".."}
        >
          <Icon name={"back"} size={24} className={"mr-2"} />
          <Typography.Title level={1}>重置密码</Typography.Title>
        </Link>
        <ForgetPasswordForm
          onSuccess={() => {
            setSuccess(true);
          }}
        />
      </Box>
    );
  }
  return <SuccessNotification />;
};

export default ForgetPassword;
