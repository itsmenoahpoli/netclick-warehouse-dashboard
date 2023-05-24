import React from "react";
import { Avatar, Button, Breadcrumb } from "antd";
import { Helmet } from "react-helmet";
import Hamburger from "hamburger-react";
import PerfectScrollbar from "react-perfect-scrollbar";
import type {
  TLayoutProps,
  TAppContentProps,
  TAppSidebarProps,
  TSidebarItem,
  TSidebarItemChild,
} from "~/types/layouts";
import { BrandLogo } from "~/components";
import { SIDEBAR_MENU } from "~/statics";

const AppSidebar = (props: TAppSidebarProps) => {
  return (
    <div
      className={`dashboard-wrapper__sidebar ${
        props.isSidebarCollapsed ? "closed" : "open"
      }`}
    >
      <div className="header">
        <BrandLogo height={100} width={100} />{" "}
      </div>
      <div className="body">
        <PerfectScrollbar>
          {props.items.map((i: TSidebarItem) => (
            <div className="link-group" key={`link-group-${i.groupName}`}>
              <label className="link-group-label">{i.groupName}</label>
              <div className="group-links">
                {i.children.map((x: TSidebarItemChild) => (
                  <button className="group-link-btn" key={`group-link-btn-${x.url}`}>
                    <span className="icon">{x.icon}</span>
                    <span className="label">{x.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </PerfectScrollbar>
      </div>
    </div>
  );
};

const AppContent = (props: TAppContentProps) => {
  return (
    <div className="dashboard-wrapper__main-content">
      <div className="navbar">
        <div className="panel">
          <Hamburger
            toggled={props.isSidebarCollapsed}
            toggle={props.onToggleSidebarHandler}
            color="#0D223A"
            size={16}
          />
        </div>
        <div className="panel">
          <Button type="link">Notifications</Button>
          <Avatar style={{ backgroundColor: "#f56a00", fontSize: "12px" }}>PP</Avatar>
        </div>
      </div>
      <div className="sub-navbar">
        <Breadcrumb
          items={[
            {
              title: "Dashboard",
            },
            {
              title: "Overview",
            },
          ]}
        />
      </div>
    </div>
  );
};

export const DashboardLayout: React.FC<TLayoutProps> = (props) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState<boolean>(false);
  const title = props.title ?? "Dashboard";

  const onToggleSidebarHandler = (): void => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Netclick Technologies | {title}</title>
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
};
