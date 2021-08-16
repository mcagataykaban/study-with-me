import React from "react";
import routes from "./routes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const RoutesComponent = ({setBreadCrumbText, breadCrumbText}) => {
  return (
    <>
      {routes.map(({ path, name, Component }, key) => (
        <Route
          exact
          path={path}
          key={key}
          render={(props) => {
            const crumbs = routes
              .filter(({ path }) => props.match.path.includes(path))
              .map(({ path, ...rest }) => ({
                path: Object.keys(props.match.params).length
                  ? Object.keys(props.match.params).reduce(
                      (path, param) =>
                        path.replace(`:${param}`, props.match.params[param]),
                      path
                    )
                  : path,
                ...rest,
              }));
            crumbs.map(({ name, path }) =>
              props.match.path === path ? setBreadCrumbText(name) : ""
            );
            return (
              <div>
                <Component {...props} />
              </div>
            );
          }}
        />
      ))}
    </>
  );
};

export default RoutesComponent;
