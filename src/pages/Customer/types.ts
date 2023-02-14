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

type Collection = {
  id: number;
  data: {
    name: string;
    client: number;
  };
  children?: Collection[];
};

type CustomerTypes = {
  Customer: Customer;
  Collection: Collection;
};

export default CustomerTypes;
