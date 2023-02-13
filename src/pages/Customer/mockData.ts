import { mock } from "mockjs";

const template = {
  name: "@ctitle",
  managerName: "@cname",
  countryOfRegistration: "美国",
  areaOfRegistration: "@city",
  uuid: "@guid",
  createdDt: "@datetime",
  userId: "@guid",
  companyId: "@guid",
};

const listData: any = mock({
  "data|11": [template],
});

const detailData = () => mock(template);

export default {
  listData,
  detailData,
};
