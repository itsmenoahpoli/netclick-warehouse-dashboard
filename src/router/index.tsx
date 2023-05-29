import { Redirect } from "react-router-dom";
import { LoginPage, DashboardOverviewPage } from "~/views";

export default [
  {
    path: "/",
    component: <Redirect to="/dashboard/overview" />,
  },
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/",
    component: <Redirect to="/dashboard/overview" />,
  },
  {
    path: "/dashboard/overview",
    component: <DashboardOverviewPage />,
  },
];
