import Box from "src/pages/Login/components/Box";
import { Button, Form, Input, Typography } from "antd";
import utils from "src/utils/index";
import OtpInput from "src/pages/Login/components/OtpInput";
import { PasswordSet } from "src/pages/Login/ForgetPassword/ForgetPassword";
import { OTPFormItem } from "src/pages/Login/SignIn/index";

function Register() {
  const [form] = Form.useForm();
  return (
    <Box>
      <div className={"mb-8"}>
        <Typography.Title level={1}>注册</Typography.Title>
      </div>

      <Form layout={"vertical"}>
        <Form.Item name={"email"} label={"邮箱"}>
          <Input placeholder={"邮箱"} />
        </Form.Item>
        <OTPFormItem form={form} />
        <Form.Item label={"公司名"} name={"companyName"}>
          <Input placeholder={"请输入公司名"} />
        </Form.Item>
        <PasswordSet passwordLabel={"设置密码"} />
        <Button size={"large"} block type={"primary"}>
          注册
        </Button>
      </Form>
    </Box>
  );
}

export default Register;
