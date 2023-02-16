import PageContentWrapper from "src/wrapper/Home/PageContentWrapper";
import { Button, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { NavRoutes } from "src/wrapper/Home/HomeWrapper";
import type { ReactNode } from "react";
import classNames from "classnames";

function HomeHeader({
  pageTitle,
  customActions,
  bottomBorder,
}: {
  pageTitle?: string;
  customActions?: ReactNode;
  bottomBorder?: boolean;
}) {
  const location = useLocation();
  const navPageName = NavRoutes.find(
    (route) => route.path === location.pathname
  )?.name;
  return (
    <div
      className={classNames(
        bottomBorder && " border-0 border-b border-solid border-gray-border "
      )}
    >
      <PageContentWrapper className={"flex justify-between items-center py-8"}>
        <Typography.Title level={1}>
          {pageTitle ?? navPageName}
        </Typography.Title>
        {customActions ?? <DefaultActions />}
      </PageContentWrapper>
    </div>
  );
}

const DefaultActions = () => {
  return <Button>登出</Button>;
};

export default HomeHeader;
