import type { InputProps } from "antd";
import { Input, message, Typography } from "antd";
import useSendOTP from "src/hooks/useSendOTP";
import utils from "src/utils/index";
import { useEffect, useState } from "react";

function OtpInput({
  email,
  ...props
}: Omit<InputProps, "suffix" | "maxLength"> & { email?: string }) {
  return (
    <Input {...props} suffix={<SendOTP email={email ?? ""} />} maxLength={6} />
  );
}

const SendOTP = ({ email }: { email: string }) => {
  const [pause, setPause] = useState(true);
  const { state, countdown, handleSendOTP } = useSendOTP({
    sendTo: {
      value: email,
    },
    sendOtp: async (value) => {
      console.log(value);
    },
    pause,
    onError(error) {
      message.error(error);
    },
    waitingSeconds: 5,
  });
  useEffect(() => {
    setPause(true);
  }, [email]);
  if (!utils.REManual.email.test(email)) {
    return (
      <Typography.Text type={"secondary"} className={"cursor-not-allowed"}>
        获取验证码
      </Typography.Text>
    );
  }
  if (state === "init") {
    return (
      <Typography.Link
        onClick={() => {
          setPause(false);
        }}
      >
        获取验证码
      </Typography.Link>
    );
  } else if (state === "pending") {
    return <Typography.Text type={"secondary"}>{countdown}s</Typography.Text>;
  } else {
    return (
      <Typography.Link
        onClick={() => {
          handleSendOTP();
        }}
      >
        重新发送验证码
      </Typography.Link>
    );
  }
};

export default OtpInput;
