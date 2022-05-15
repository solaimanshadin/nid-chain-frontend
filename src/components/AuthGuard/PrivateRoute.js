import React from 'react';
import { useSelector } from 'react-redux';
import {
    Navigate, Route
} from "react-router-dom";

function PrivateRoute({ element: Component, ...rest }) {
    const { data } = useSelector((state) => state.auth)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          data ? (
            <Component />
          ) : (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  

export default PrivateRoute;