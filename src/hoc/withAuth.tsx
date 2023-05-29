import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthStore } from "~/store";

export const withAuth =
  <T extends object>(WrappedComponent: React.ComponentType<T>) =>
  (props: T) => {
    const authStore = useAuthStore();
    const isAuthenticated = Boolean(authStore.user !== null);

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
