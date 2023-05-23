import React from "react";
import { Form } from "antd";
import { TCredentials } from "~/types/auth";

type TProps = {
  onLoginHandler: (credentials: TCredentials) => void;
};

export const LoginForm: React.FC<TProps> = (props) => {
  return (
    <Form className="custom-form">
      <input type="text" placeholder="Enter username" />
      <input type="password" placeholder="Enter password" />
      <button>Log In</button>
    </Form>
  );
};
