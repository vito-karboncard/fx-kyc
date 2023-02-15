import { MemberRole, MemberStatus } from "src/pages/Team/types";
import { mock } from "mockjs";

const memberTemplate: any = {
  firstName: "@cfirst",
  lastName: "@clast",
  email: "@email",
  "role|1": [MemberRole.Admin, MemberRole.Member],
  id: "@guid",
  "status|1": [MemberStatus.normal, MemberStatus.resign],
};

const teamList = mock({
  "data|11": [memberTemplate],
});

export default {
  teamList,
};
