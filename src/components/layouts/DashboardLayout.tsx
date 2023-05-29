import React from "react";
import { Helmet } from "react-helmet";
import type { TLayoutProps } from "~/types/layouts";
import { AppSidebar, AppContent } from "~/components/layouts/contents";
import { APP_SETTINGS } from "~/config";
import { SIDEBAR_MENU } from "~/statics";
import { withAuth } from "~/hoc/withAuth";

export const DashboardLayout: React.FC<TLayoutProps> = withAuth((props) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState<boolean>(false);
  const title = props.title ?? APP_SETTINGS.defaultTitle;

  const onToggleSidebarHandler = (): void => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>TCL | {title}</title>
      </Helmet>
      <div className="dashboard-wrapper">
        <AppSidebar isSidebarCollapsed={isSidebarCollapsed} items={SIDEBAR_MENU} />

        <AppContent
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebarHandler={onToggleSidebarHandler}
        >
          {props.children}
        </AppContent>
      </div>
    </React.Fragment>
  );
});
