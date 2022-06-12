import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { SignIn } from "./components/Signin";
import { SignUp } from "./components/SignUp";

const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
});

export default ({ history }) => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={SignUp} />
        </Switch>
      </StylesProvider>
    </Router>
  );
};
