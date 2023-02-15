import HomePageContentWrapper from "src/wrapper/Home/HomePageContentWrapper";
import { Button, Space, Table } from "antd";
import Icon from "src/components/icon/index";
import type { ColumnsType } from "antd/es/table/index";
import type TeamTypes from "src/pages/Team/types";
import type { MemberStatus } from "src/pages/Team/types";
import { MemberRole } from "src/pages/Team/types";
import teamUtils from "src/pages/Team/utils";
import mockData from "src/pages/Team/mockData";
import classNames from "classnames";

function TeamIndex() {
  const columns: ColumnsType<TeamTypes["Member"]> = [
    {
      title: "姓名",
      render(_, record) {
        return (
          <span>
            {record.firstName}
            {record.lastName}
          </span>
        );
      },
    },
    {
      title: "邮箱",
      dataIndex: "email",
    },
    {
      title: "角色",
      dataIndex: "role",
      render(role: MemberRole) {
        return (
          <span
            className={classNames(
              "inline-block py-1 px-3 rounded-lg border border-primary border-opacity-20 border-solid",
              role === MemberRole.Admin && "font-medium"
            )}
          >
            {MemberRole[role]}
          </span>
        );
      },
    },
    {
      title: "状态",
      dataIndex: "status",
      align: "right",
      render(status: MemberStatus) {
        return (
          <span className={teamUtils.memberStatusColor[status]}>
            {teamUtils.memberStatusMap[status]}
          </span>
        );
      },
    },
  ];
  return (
    <HomePageContentWrapper>
      <TeamHeader adminNum={1} memberNum={6} />
      <Table columns={columns} dataSource={mockData.teamList.data} />
    </HomePageContentWrapper>
  );
}

export default TeamIndex;

function TeamHeader({
  adminNum,
  memberNum,
}: {
  adminNum: number;
  memberNum: number;
}) {
  return (
    <div className="flex-between mb-6">
      <Space size={40}>
        <NumberText
          label={"Admin"}
          num={adminNum}
          color={"rgba(110, 28, 232, 0.2)"}
        />
        <NumberText
          label={"成员"}
          num={memberNum}
          color={"rgba(43, 89, 255, 0.2)"}
        />
      </Space>
      <Button icon={<Icon name={"cross"} className={"mr-2"} />}>新增</Button>
    </div>
  );
}

const NumberText = ({
  label,
  num,
  color,
}: {
  label: string;
  num: number;
  color: string;
}) => {
  return (
    <div className={"flex items-center mb-6"}>
      <span
        className={"block w-2 h-2 rounded-full mr-2"}
        style={{ backgroundColor: color }}
      />
      <span>
        {label} {num}
      </span>
    </div>
  );
};
