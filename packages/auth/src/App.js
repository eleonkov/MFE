import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { SignIn } from "./components/Signin";
import { SignUp } from "./components/SignUp";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ onSignIn, history }) => {
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route path="/auth/signin">
            <SignIn onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <SignUp onSignIn={onSignIn} />
          </Route>
        </Switch>
      </StylesProvider>
    </Router>
  );
};
