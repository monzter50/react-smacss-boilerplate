import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { connect } from "react-redux";
import asyncComponent from "./helpers/AsyncFunc";

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const PublicRoutes = () => {
  return (
    <ConnectedRouter >
      <div>
        <Route
          exact
          path={"/Configurator"}
          component={asyncComponent(() => import("./containers/Page/Configurator"))}
        />
        <Route
          exact
          path={"/Testimonial"}
          component={asyncComponent(() => import("./containers/Page/Testimonial"))}
        />
        {/* <Route
          exact
          path={"*"}
          component={asyncComponent(() => import("./containers/Page/404"))}
        /> */}
     
      </div>
    </ConnectedRouter>
  );
};

export default connect()(PublicRoutes);