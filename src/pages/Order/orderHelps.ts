import { OrderType } from "src/pages/Order/types";

const orderTypeMap = {
  [OrderType.bankAccount]: "银行账户",
  [OrderType.annualReview]: "账户年审",
  [OrderType.companyRegister]: "公司注册",
};
const orderHelps = {
  orderTypeMap,
};

export default orderHelps;
