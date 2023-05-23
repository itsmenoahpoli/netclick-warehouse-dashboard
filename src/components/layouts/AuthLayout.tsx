import React from "react";
import { Helmet } from "react-helmet";
import type { TLayoutProps } from "~/types/layouts";

export const AuthLayout: React.FC<TLayoutProps> = (props) => {
  const title = props.title ?? "Warehouse Dashboaard";

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
