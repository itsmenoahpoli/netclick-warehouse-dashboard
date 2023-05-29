import React from "react";
import { Avatar, Dropdown, Button, Breadcrumb } from "antd";
import type { MenuProps } from "antd";
import Hamburger from "hamburger-react";
import type { TAppContentProps } from "~/types/layouts";

const AppNavbar: React.FC<{
  isSidebarCollapsed: boolean;
  onToggleSidebarHandler: () => void;
}> = (props) => {
  const userDropdownItems: MenuProps["items"] = [
    {
      key: "1",
      label: <small>My Account</small>,
    },
  ];

  return (
    <React.Fragment>
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
          <Dropdown menu={{ items: userDropdownItems }} placement="bottom">
            <Avatar style={{ backgroundColor: "#f56a00", fontSize: "12px" }}>PP</Avatar>
          </Dropdown>
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
    </React.Fragment>
  );
};

export const AppContent: React.FC<TAppContentProps> = (props: TAppContentProps) => {
  return (
    <div className="dashboard-wrapper__main-content">
      <AppNavbar
        isSidebarCollapsed={props.isSidebarCollapsed}
        onToggleSidebarHandler={props.onToggleSidebarHandler}
      />
      <div className="page-content">{props.children}</div>
    </div>
  );
};
