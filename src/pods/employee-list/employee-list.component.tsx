import React, { useState } from 'react';
import { PictureInfo } from './employee-list.vm';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
import { CartComponent } from '../../common/components/cart'

import * as classes from './employee-list.styles';
interface Props {
  // employees: Employee[];
  picture: PictureInfo[];
  section;
  // onEditEmployee: (id: string) => void;
}
export const EmployeeListComponent: React.FunctionComponent<Props> = ({
  picture,
  section,
  // onEditEmployee,
}) => {
  console.log("componente listado ");
  console.log(section);
  console.log(picture);
  console.log("*************************");

  const [demo, setDemo] = useState<string>('')

  const handleOnChange = (e:any) => {
    console.log(e.target.checked);
    console.log(e.target.id)
    const check = e.target.checked;

    if (check) {
      setDemo(e.target.id)
    } else {
      // clonado de objeto 
    }
  }

  /* handleOnChange recupera si se ha clicqueado o no

    por un lado .-
    si se ha pulsado y es true añadimos si no quitamos

  */

  return (
    <>
      {section}
      <hr/>
      {picture.map(row => (
        <div key={row.id}>
          {row.id}
          <img className={classes.imagen} src={row.picUrl} />
          {row.title}
          <input type="checkbox" id={row.id} value={row.title} onChange={handleOnChange} />
            <label htmlFor={row.id}>{'Añadir a mi carrito'}</label>
        </div>
      ))}
      <CartComponent demo={demo}/>
    </>
  );
};


/*
input un onchange lanza evento
*/
