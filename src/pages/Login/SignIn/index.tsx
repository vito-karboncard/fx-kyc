import { Button, Form, Input, Typography } from "antd";
import Box from "src/pages/Login/components/Box";
import ModeSwitch from "src/pages/Login/components/ModeSwitch";
import { useEffect, useState } from "react";
import OtpInput from "src/pages/Login/components/OtpInput";
import utils from "src/utils/index";

type SignInMethod = "password" | "otp";

function SignIn() {
  const [signInMethod, setSignInMethod] = useState<SignInMethod>("password");
  const [form] = Form.useForm();
  const email = Form.useWatch("email", form);
  const otp = Form.useWatch("otp", form);
  useEffect(() => {
    if (otp?.length === 6) {
      form.validateFields(["otp"]);
    }
  }, [otp, form]);
  return (
    <Box>
      <Typography.Title level={1}>登录</Typography.Title>
      <Form layout={"vertical"} className={"mt-8"} form={form}>
        <Form.Item name={"email"}>
          <Input placeholder={"邮箱"} />
        </Form.Item>
        {signInMethod === "password" && (
          <Form.Item name={"password"}>
            <Input.Password placeholder={"请输入密码"} />
          </Form.Item>
        )}

        {signInMethod === "otp" && (
          <Form.Item
            name={"otp"}
            rules={[utils.formValidator.otpRule]}
            validateTrigger={"onBlur"}
          >
            <OtpInput placeholder={"验证码"} email={email} />
          </Form.Item>
        )}

        <ModeSwitch
          switchText={signInMethod === "password" ? "验证码登录" : "密码登陆"}
          onClick={() => {
            setSignInMethod((prevState) => {
              if (prevState === "otp") {
                return "password";
              } else {
                return "otp";
              }
            });
          }}
        />
        <div className="mt-6">
          <Button
            size={"large"}
            type={"primary"}
            block
            onClick={() => {
              console.log(form.getFieldsValue());
            }}
          >
            登录
          </Button>
          <Button size={"large"} type={"link"} block className={"mt-2"}>
            注册
          </Button>
        </div>
      </Form>
    </Box>
  );
}

export default SignIn;