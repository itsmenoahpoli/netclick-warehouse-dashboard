import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import type { TAppSidebarProps, TSidebarItem, TSidebarItemChild } from "~/types/layouts";
import { BrandLogo } from "~/components";

export const AppSidebar: React.FC<TAppSidebarProps> = (props) => {
  const history = useHistory();
  const location = useLocation();

  const isActivePath = (url: string): boolean => {
    return url.includes(location.pathname);
  };

  return (
    <div
      className={`dashboard-wrapper__sidebar ${
        props.isSidebarCollapsed ? "closed" : "open"
      }`}
    >
      <div className="header">
        <BrandLogo height={60} width={240} />
      </div>
      <div className="body">
        <PerfectScrollbar>
          {props.items.map((i: TSidebarItem) => (
            <div className="link-group" key={`link-group-${i.groupName}`}>
              <label className="link-group-label">{i.groupName}</label>
              <div className="group-links">
                {i.children.map((x: TSidebarItemChild) => (
                  <button
                    className={`group-link-btn ${isActivePath(x.url) ? "active" : ""}`}
                    key={`group-link-btn-${x.url}`}
                    onClick={() => history.push(x.url)}
                  >
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
