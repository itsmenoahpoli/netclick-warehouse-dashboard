import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import APP_ROUTES from "~/router";

export const App: React.FC = () => {
  const renderRoutes = () => {
    return APP_ROUTES.map((r) => (
      <Route path={r.path} key={r.path} exact>
        {r.component}
      </Route>
    ));
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>{renderRoutes()}</Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
