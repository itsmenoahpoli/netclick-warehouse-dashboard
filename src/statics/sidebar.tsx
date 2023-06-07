import {
  TbHome,
  TbBrowserCheck,
  TbCheckupList,
  TbTruckDelivery,
  TbFileInvoice,
  TbCalendarTime,
  TbChartAreaLine,
  TbChartPie4,
  TbChartDonutFilled,
  TbFileStack,
  TbUsers,
  TbClockEdit,
  TbUserCheck,
  TbSettings,
} from "react-icons/tb";
import type { TSidebarItem } from "~/types/layouts";

export const SIDEBAR_MENU: Array<TSidebarItem> = [
  {
    groupName: "Main",
    children: [
      {
        label: "Dashboard Overview",
        url: "/dashboard/overview",
        icon: <TbHome />,
      },
      {
        label: "Warehouse Portal",
        url: "/portal",
        icon: <TbBrowserCheck />,
      },
    ],
  },

  {
    groupName: "Reports",
    children: [
      {
        label: "Inventory Reports",
        url: "/dashboard",
        icon: <TbChartAreaLine />,
      },
      {
        label: "Product Reports",
        url: "/dashboard",
        icon: <TbChartPie4 />,
      },
      {
        label: "Sales Reports",
        url: "/dashboard",
        icon: <TbChartDonutFilled />,
      },
    ],
  },
  {
    groupName: "Warehouse",
    children: [
      {
        label: "Products Inventory",
        url: "/dashboard",
        icon: <TbCheckupList />,
      },
      {
        label: "Delivery Order Schedules",
        url: "/dashboard",
        icon: <TbTruckDelivery />,
      },
      {
        label: "Purchase Order Schedules",
        url: "/dashboard",
        icon: <TbFileInvoice />,
      },
    ],
  },
  {
    groupName: "Accountings",
    children: [
      {
        label: "Account Reminders",
        url: "/dashboard",
        icon: <TbCalendarTime />,
      },
    ],
  },
  {
    groupName: "Warranty Documents",
    children: [
      {
        label: "Product Warranties",
        url: "/dashboard",
        icon: <TbFileStack />,
      },
      {
        label: "Supplier Warranties",
        url: "/dashboard",
        icon: <TbFileStack />,
      },
    ],
  },
  {
    groupName: "Employees",
    children: [
      {
        label: "Profiles",
        url: "/dashboard",
        icon: <TbUsers />,
      },
      {
        label: "Time-Keeping",
        url: "/dashboard",
        icon: <TbClockEdit />,
      },
      {
        label: "User Trails",
        url: "/dashboard",
        icon: <TbUsers />,
      },
    ],
  },
  {
    groupName: "System",
    children: [
      {
        label: "Users Management",
        url: "/dashboard",
        icon: <TbUserCheck />,
      },
      {
        label: "Settings",
        url: "/dashboard",
        icon: <TbSettings />,
      },
    ],
  },
];
