import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link'
import { Link } from 'react-router-dom'
import { AuthContext } from 'common-app/auth';
import { routes } from 'core/router';
import * as classes from './app.layout.styles';

export const AppLayout: React.FC = ({ children }) => {
  const { userName } = React.useContext(AuthContext);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Galeria de fotos - [dwk262]
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.loginText}
          >
            {userName}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
          >
            <Link color="inherit" to={routes.submoduleList}>
              home
            </Link>
          </Typography>


          <Typography
            variant="h6"
            color="inherit"
            className={classes.loginText}
          >carrito</Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};
