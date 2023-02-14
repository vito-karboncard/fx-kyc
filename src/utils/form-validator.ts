import type { FormRule } from "antd";
import utils from ".";

export const requiredRule: FormRule = {
  required: true,
  message: "该字段不能为空",
};
export const otpRule: FormRule = {
  async validator(_, value, ...rest) {
    if (utils.REManual.otp.test(value)) {
      await Promise.resolve();
      return;
    }
    throw new Error("请输入正确的验证码");
  },
};

export const passwordRule: FormRule = {
  async validator(_, value) {
    const numReg = /^[\w_*$#!]{8,16}$/;
    const atLeastUpperCase = /[A-Z]/;
    const atLeastLowerCase = /[a-z]/;
    const atLeastNumber = /[0-9]/;
    const atLeastUnderline = /_/;
    if (!numReg.test(value)) {
      throw new Error("8-16个字符");
    } else if (!atLeastUpperCase.test(value)) {
      throw new Error("至少一个大写英文字母");
    } else if (!atLeastLowerCase.test(value)) {
      throw new Error("至少一个小写英文字母");
    } else if (!atLeastNumber.test(value) || !atLeastUnderline.test(value)) {
      throw new Error("至少一个英文数字或符号");
    } else {
      await Promise.resolve();
    }
  },
};
