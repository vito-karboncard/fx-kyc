import * as mock from "mockjs";
import { OrderStatus, OrderType } from "src/pages/Order/types";

const commonData = {
  customerName: "@cname",
  orderCreatedDt: "@datetime",
  remarks: "@cparagraph",
  country: "中国",
  bankAccountRemarks: "@cparagraph",
  address: "桑家坡1号楼502",
  county: "@county",
  city: "@city",
  state: "@province",
  annualVerificationExpiredDt: "@datetime",
  companyId: "@guid",
  currency: "CNY",
  customerId: "@guid",
  orderCanceledDt: "@datetime",
  orderCompletedDt: "@datetime",
  price: "",

  uuid: "@guid",
  userId: "@guid",
  "status|+1": [
    OrderStatus.waiting,
    OrderStatus.pending,
    OrderStatus.success,
    OrderStatus.cancel,
  ],
  "type|+1": [
    OrderType.companyRegister,
    OrderType.annualReview,
    OrderType.bankAccount,
  ],
};
const data: any = mock.mock({
  "data|11": [commonData],
});

export default data;

export const detailData = () => mock.mock(commonData);
