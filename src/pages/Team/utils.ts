import { MemberStatus } from "src/pages/Team/types";

const teamUtils = {
  memberStatusMap: {
    [MemberStatus.normal]: "正常",
    [MemberStatus.resign]: "已离职",
  },
  memberStatusColor: {
    [MemberStatus.normal]: "text-primary",
    [MemberStatus.resign]: "text-color-secondary",
  },
};

export default teamUtils;
