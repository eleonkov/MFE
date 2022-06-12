import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import { Header } from "./components/Header";
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

export default () => (
  <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <Header />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth" component={AuthLazy} />
          <Route path="/" component={MarketingLazy} />
        </Switch>
      </Suspense>
    </StylesProvider>
  </BrowserRouter>
);
