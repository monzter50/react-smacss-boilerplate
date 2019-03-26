import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutView from './containers/Page/Configurator'
import HomeView from './containers/Page/Testimonial'
// import { ConnectedRouter } from "react-router-redux";
import { connect } from "react-redux";
import asyncComponent from "./helpers/AsyncFunc";

// const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       isLoggedIn ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/signin",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );
const PublicRoutes = () => {
  return (
    <Router >
      <div>
        <Route
          exact
          path={"/Configurator"}
          component={HomeView}
        />
        <Route
          exact
          path={"/Testimonial"}
          component={AboutView}
        />
        {/* <Route
          exact
          path={"*"}
          component={asyncComponent(() => import("./containers/Page/404"))}
        /> */}
     
      </div>
    </Router>
  );
};

export default PublicRoutes;