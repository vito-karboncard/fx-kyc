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

const fileList: any = [
  {
    fileName: "safd.txt", // 文件名
    uid: 4, // 文件id
    url: "/media/documents/safd.txt", // 文件download url
    uploaded_by_user_id: 24, // 上传文件的秘书公司员工
    file_size: 5247157, // 文件大小
    file_hash:
      "d7d2615f4fa1ae4c32845c8743a9237e470ecae7685a7f5dc65b789c6525d407",
    created_at: "2023-02-08T07:42:27.367305Z",
  },
  {
    fileName: "async_frame_ugTxrlP.pdf",
    uid: 5,
    url: "/media/documents/async_frame_ugTxrlP.pdf",
    uploaded_by_user_id: 24,
    file_size: 337177,
    file_hash:
      "44aa13e79d3bb68ff7715ed6ded66c1cfd2faef6fb9ac55a4a21f102c15278dd",
    created_at: "2023-02-08T07:46:20.469556Z",
  },
  {
    fileName: "golang_fast_YLtcISs.pdf",
    uid: 6,
    url: "/media/documents/golang_fast_YLtcISs.pdf",
    uploaded_by_user_id: 24,
    file_size: 5247157,
    file_hash:
      "d7d2615f4fa1ae4c32845c8743a9237e470ecae7685a7f5dc65b789c6525d407",
    created_at: "2023-02-08T07:46:20.480611Z",
  },
];
export default {
  listData,
  detailData,
  fileList,
};
