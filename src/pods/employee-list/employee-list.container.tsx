import React from 'react';
import { useParams } from 'react-router-dom';
import { EmployeeListComponent } from './employee-list.component';
import { PictureInfo } from './employee-list.vm';
import { mapDibujoListFromApiToVm, mapFotoListFromApiToVm } from './employee-list.mapper';
import { getDibujoList, getFotoList } from './api';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

export const EmployeeListContainer: React.FunctionComponent = () => {


  const { section } = useParams();

  // const useStateReac = () => { section ? React.useState<PictureInfo[]>([]) : React.useState<Employee[]>([]) };

  const [list, setList] = React.useState<PictureInfo[]>([]);
  const history = useHistory();

  // const onLoadEmployeeList = async () => {
  //   const apiEmployeeList = await getEmployeeList();
  //   const viewModelEmployeeList = mapEmployeeListFromApiToVm(apiEmployeeList);
  //   setList(viewModelEmployeeList);
  // };

  const onLoadPictureList = async () => {
    const apiPictureList = await (section === 'dibujo' ? getDibujoList() : getFotoList());
    // console.log("------ apiPictureList -------");
    // console.log(apiPictureList);
    const viewModelPictueList = (section === 'dibujo' ? mapDibujoListFromApiToVm(apiPictureList) : mapFotoListFromApiToVm(apiPictureList));
    setList(viewModelPictueList);
  };

  React.useEffect(() => {
    onLoadPictureList();
  }, []);

  // const handleEditEmployee = (id: string) => {
  //   history.push(routes.editEmployee(id));
  // };

  return (
    <>
      <h1>{section}</h1>
      <EmployeeListComponent
        picture={list}
        section={section}
      // onEditEmployee={handleEditEmployee}
      />
    </>
  );
};
