import React from "react";
import { Space, Card } from "antd";

import { AuthLayout, BrandLogo, LoginForm } from "~/components";
import type { TCredentials } from "~/types/auth";

export const LoginPage: React.FC = () => {
  const onLoginHandler = async (credentials: TCredentials) => {
    console.log(credentials);
  };

  return (
    <AuthLayout>
      <Space direction="vertical" size={20} style={{ width: "100%" }}>
        <BrandLogo />
        <div>
          <h3 className="text-center">Warehouse Inventory Dashboard</h3>
          <LoginForm onLoginHandler={onLoginHandler} />
        </div>
        <div className="text-center copyright-label">
          <small>All Rights Reserved. Netclick Technologies 2023</small>
        </div>
      </Space>
    </AuthLayout>
  );
};
