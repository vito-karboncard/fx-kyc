import type { FormRule } from "antd";
import utils from ".";

export const otpRule: FormRule = {
  async validator(value) {
    if (utils.REManual.otp.test(value as string)) {
      return;
    }
    return new Error("请输入争取的验证码");
  },
};
