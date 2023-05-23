import React from "react";

export type TLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export type TAppSidebarProps = {
  items: Array<TSidebarItem>;
  isSidebarCollapsed: boolean;
};

export type TAppContentProps = {
  children: React.ReactNode;
  isSidebarCollapsed: boolean;
  onToggleSidebarHandler: () => void;
};

export type TSidebarItem = {
  groupName: string;
  children: Array<TSidebarItemChild>;
};

export type TSidebarItemChild = {
  label: string;
  url: string;
  icon: React.ReactNode | undefined;
};
