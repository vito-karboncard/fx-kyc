export enum MemberRole {
  "Admin" = 1,
  "Member",
}
export enum MemberStatus {
  normal = 10,
  resign = 20,
}
type Member = {
  firstName: string;
  lastName: string;
  email: string;
  role: MemberRole;
  id: string;
  status: MemberStatus;
};

type TeamTypes = {
  Member: Member;
};

export default TeamTypes;
