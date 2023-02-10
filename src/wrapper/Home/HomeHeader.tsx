import PageContentWrapper from "src/wrapper/Home/PageContentWrapper";
import { Button, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { NavRoutes } from "src/wrapper/Home/HomeWrapper";
import type { ReactNode } from "react";

function HomeHeader({
  pageTitle,
  customActions,
}: {
  pageTitle?: string;
  customActions?: ReactNode;
}) {
  const location = useLocation();
  const navPageName = NavRoutes.find(
    (route) => route.path === location.pathname
  )?.name;
  return (
    <PageContentWrapper className={"flex justify-between items-center py-8"}>
      <Typography.Title level={1}>{pageTitle ?? navPageName}</Typography.Title>
      {customActions ?? <DefaultActions />}
    </PageContentWrapper>
  );
}

const DefaultActions = () => {
  return <Button>登出</Button>;
};

export default HomeHeader;
