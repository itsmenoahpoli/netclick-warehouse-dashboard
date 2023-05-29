import React from "react";
import { useHistory } from "react-router-dom";
import { Space } from "antd";

import { AuthLayout, BrandLogo, LoginForm } from "~/components";
import { AuthService } from "~/services";
import type { TCredentials } from "~/types/auth";

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const AUTH_SERVICE = new AuthService();

  const onLoginHandler = async (credentials: TCredentials) => {
    const result = await AUTH_SERVICE.login(credentials);

    if (result === "AUTHENTICATED") {
      history.push("/dashboard/overview");
    }
  };

  return (
    <AuthLayout>
      <Space direction="vertical" size={20} style={{ width: "100%" }}>
        <BrandLogo />
        <div>
          <h3 className="text-center">Ryan's Technohub</h3>
          <p>Warehouse dashboard</p>
          <LoginForm onLoginHandler={onLoginHandler} />
        </div>
        <div className="text-center copyright-label">
          <small>All Rights Reserved. Netclick Technologies 2023</small>
        </div>
      </Space>
    </AuthLayout>
  );
};
