import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/logIn",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
