import { mock } from "mockjs";

const collectionItemRemarkTemplate: any = {
  uuid: "@guid",
  type: "remark",
  value: "@csentence",
  fileList: null,
  collectionUuid: "@guid",
  createdAt: "@datetime",
};

const templateMockData = {
  remarkItem: () => mock(collectionItemRemarkTemplate),
};

export default templateMockData;
