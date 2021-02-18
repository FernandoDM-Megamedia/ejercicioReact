import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  GalleryScene,
  SubmoduleListScene,
  EmployeeListScene,
  EmployeeScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      {/* <Switch> */}
      {/* <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.login]}
          component={LoginScene}
        /> */}
      <Route
        exact={true}
        path={switchRoutes.login}
        component={LoginScene}
      />
      <Route
        exact={true}
        path={switchRoutes.gallery}
        component={GalleryScene}
      />
      <Route
        exact={true}
        path={[switchRoutes.root, switchRoutes.submoduleList]}
        component={SubmoduleListScene}
      />
      <Route
        exact={true}
        path={switchRoutes.employees}
        component={EmployeeListScene} // aqui llamada a la scena y la escena exporta la llamada al componente
      />
      <Route
        exact={true}
        path={switchRoutes.editEmployee}
        component={EmployeeScene}
      />
      {/* </Switch> */}
    </Router>
  );
};
