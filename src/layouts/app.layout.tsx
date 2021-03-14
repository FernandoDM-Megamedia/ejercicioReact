import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link'

import { CartComponent } from './../common/components/cart'

import { Link } from 'react-router-dom'
import { AuthContext } from 'common-app/auth';

import { routes } from 'core/router';
import * as classes from './app.layout.styles';


export const AppLayout: React.FC<any> = ({ children, handletoggleShow }) => {

  // const [show, toggleShow] = React.useState(false);

  return (
    <>
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
            {/* {userName} */}
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
          >

          </Typography>
          {/* CArrito de compra - */}
          <Button onClick={handletoggleShow} >
            {/* Carrito: {show ? 'show' : 'hide'} */}
            <ShoppingCartIcon />
          </Button>

        </Toolbar>

      </AppBar>
      {/* Mostrams u ocultamos el caro de compra componente */}
      {/* {show && <div><CartComponent demo={item} handleDelete={handleDelete} /></div>} */}
      {/* {show && <div>{'aqui va el carrito'}</div>} */}
      {/* montamos el children que nos viene  ... */}
      {children}
    </>
  );
};
