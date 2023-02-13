type Customer = {
  name: string;
  managerName: string;
  countryOfRegistration: string;
  areaOfRegistration: string;
  uuid: string;
  createdDt: string;
  userId: string;
  companyId: string;
  id: number;
};

type CustomerTypes = {
  Customer: Customer;
};

export default CustomerTypes;
