import type { ComponentProps, ReactNode } from "react";
import HomeHeader from "src/wrapper/Home/HomeHeader";
import PageContentWrapper from "src/wrapper/Home/PageContentWrapper";
import classNames from "classnames";

type HeaderProps = ComponentProps<typeof HomeHeader>;
function HomePageContentWrapper({
  children,
  contentClassName,
  ...headerProps
}: HeaderProps & { children: ReactNode; contentClassName?: string }) {
  return (
    <>
      <HomeHeader {...headerProps} />
      <PageContentWrapper className={classNames(contentClassName, "pt-6")}>
        {children}
      </PageContentWrapper>
    </>
  );
}

export default HomePageContentWrapper;
