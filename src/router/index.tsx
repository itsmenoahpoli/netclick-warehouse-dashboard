import { LoginPage, DashboardOverviewPage } from "~/views";

export default [
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/dashboard/overview",
    component: <DashboardOverviewPage />,
  },
];
