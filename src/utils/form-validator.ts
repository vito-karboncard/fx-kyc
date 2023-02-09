import type { FormRule } from "antd";
import utils from ".";

export const otpRule: FormRule = {
  async validator(_, value, ...rest) {
    if (utils.REManual.otp.test(value)) {
      await Promise.resolve();
      return;
    }
    throw new Error("请输入正确的验证码");
  },
};
