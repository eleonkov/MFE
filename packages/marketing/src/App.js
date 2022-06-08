import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import LandingPage from "./components/Landing";
import PricingPage from "./components/Pricing";

export default () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/pricing" component={PricingPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};