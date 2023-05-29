import React from "react";
import { Button, Spin } from "antd";
import { TCredentials } from "~/types/auth";

type TProps = {
  onLoginHandler: (credentials: TCredentials) => void;
};

export const LoginForm: React.FC<TProps> = (props) => {
  const [credentials, setCredentials] = React.useState<TCredentials>({
    email: "superadmin@tcl.com",
    password: "password2023",
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  const mimicLoading = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(".");
      }, 1500);
    });
  };

  const onSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    mimicLoading()
      .then(() => props.onLoginHandler(credentials))
      .finally(() => setLoading(false));
  };

  const onHandleInput = (key: string, value: string) => {
    setCredentials({
      ...credentials,
      [key]: value,
    });
  };

  return (
    <form className="custom-form" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Enter username"
        defaultValue={credentials.email}
        onChange={(e) => onHandleInput("email", e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter password"
        defaultValue={credentials.password}
        onChange={(e) => onHandleInput("password", e.target.value)}
        required
      />
      <Button htmlType="submit">{loading ? <Spin /> : "Log In"}</Button>
    </form>
  );
};
