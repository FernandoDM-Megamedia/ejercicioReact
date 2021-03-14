import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  GalleryListScene,
  SubmoduleListScene,
  EmployeeListScene,
  EmployeeScene,
} from 'scenes';

export const RouterComponent: React.FC<any> = Props => {

  const {
    handleOnChange,
    handleDelete,
    isChecked,
    item
  } = Props

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
        path={switchRoutes.gallerys}
      >
        <GalleryListScene {...Props} />
      </Route>
      
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
