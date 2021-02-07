import React from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeComponent } from './employee.component';
import { Employee, createEmptyEmployee, Foto, createEmptyFOto } from './employee.vm';
import { getEmployeeById, getFotoById } from './api';
import { mapEmployeeFromApiToVm, mapFotoFromApiToVm } from './employee.mapper';

export const EmployeeContainer: React.FunctionComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = React.useState<Employee>(
    createEmptyEmployee()
  );
  const [foto, setFoto] = React.useState<Employee>(
    createEmptyFOto()
  );

  const onLoadEmployee = async () => {
    console.log(id);
    const apiEmployee = await getEmployeeById(id);
    const viewModelEmployee = mapEmployeeFromApiToVm(apiEmployee);
    setEmployee(viewModelEmployee);
  };

  const onLoadFoto = async () => {
    const apiFoto = await getFotoById(id);
    const viewModelfoto = mapFotoFromApiToVm(apiFoto);
    setEmployee(viewModelfoto);
  };

  // console.log("**************"); 

  React.useEffect(() => {
    // cunado hago click voy a la edicción
    console.log("me ejecuto al pulsar en el editar de la tabla");
    onLoadEmployee();
  }, []);

  const handleSave = (employee: Employee) => {
    console.log('Guardado');
  };

  const handleCancel = () => {
    history.back();
  };

  return (
    <>
      <h1>edición del empleado .-  {id}</h1>
      <EmployeeComponent
        employee={employee}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </>
  );
};
