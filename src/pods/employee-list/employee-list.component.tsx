import React from 'react';
import { Employee, PictureInfo } from './employee-list.vm';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

// import styles from './employee-list.styles'

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

  return (
    <>
      {section}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {/* <TableCell align="right">Activo</TableCell> */}
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">picUrl</TableCell>
              <TableCell align="right">title</TableCell>
              {/* <TableCell align="right">Fecha último incurrido</TableCell>
              <TableCell align="right">Comandos</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {picture.map(row => (
              <TableRow key={row.id}>
                {/* <TableCell component="th" scope="row">
                  <Checkbox checked={row.isActive} disabled />
                </TableCell> */}
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">
                  <img src={row.picUrl} />
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                {/* <TableCell align="right">{row.lastDateIncurred}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => onEditEmployee(row.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => console.log('on Delete: ${row.id}')}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
