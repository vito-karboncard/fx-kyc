export enum OrderType {
  companyRegister = 10,
  annualReview = 20,
  bankAccount = 30,
}
export enum OrderStatus {
  waiting = 10,
  pending = 20,
  success = 30,
  cancel = 40,
}
type Order = {
  customerId: string;
  companyId: string;
  userId: string;
  uuid: string;
  customerName: string;
  type: OrderType;
  currency: string;
  price: string;
  status: OrderStatus;
  remarks: string | null;
  country: string | null;
  state: string | null;
  city: string | null;
  county: string | null;
  address: string | null;
  annualVerificationExpiredDt: string | null;
  bankAccountRemarks: string | null;
  orderCreatedDt: string;
  orderCompletedDt: string | null;
  orderCanceledDt: string | null;
};
type OrderTypes = {
  OrderType: OrderType;
  OrderStatus: OrderStatus;
  Order: Order;
};

export default OrderTypes;
