import React from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { APP_SETTINGS } from "~/config";
import type { TLayoutProps } from "~/types/layouts";
import { useAuthStore } from "~/store";

export const AuthLayout: React.FC<TLayoutProps> = (props) => {
  const title = props.title ?? APP_SETTINGS.defaultTitle;
  const authStore = useAuthStore();

  if (authStore.user !== null) {
    return <Redirect to="/dashboard/overview" />;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="auth-wrapper">
        <div className="auth-wrapper__content">{props.children}</div>
      </div>
    </React.Fragment>
  );
};
