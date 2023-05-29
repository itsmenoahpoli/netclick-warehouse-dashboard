import {
  TbHome,
  TbWallet,
  TbChecklist,
  TbHeadset,
  TbUsers,
  TbDatabaseExport,
} from "react-icons/tb";
import type { TSidebarItem } from "~/types/layouts";

export const SIDEBAR_MENU: Array<TSidebarItem> = [
  {
    groupName: "Main",
    children: [
      {
        label: "Dashboard Overview",
        url: "/dashboard",
        icon: <TbHome />,
      },
    ],
  },
  {
    groupName: "Manage",
    children: [
      {
        label: "Client Wallets",
        url: "/manage/client-wallets",
        icon: <TbWallet />,
      },
      {
        label: "Client Transactions",
        url: "/manage/client-transactions",
        icon: <TbChecklist />,
      },
    ],
  },
  {
    groupName: "Support",
    children: [
      {
        label: "Client Tickets",
        url: "/support/client-tickets",
        icon: <TbHeadset />,
      },
    ],
  },
  {
    groupName: "Admin",
    children: [
      {
        label: "Back-office Accounts",
        url: "/admin/manage/back-office-accounts",
        icon: <TbUsers />,
      },
      {
        label: "Data Backups",
        url: "/admin/manage/data-backups",
        icon: <TbDatabaseExport />,
      },
    ],
  },
];
