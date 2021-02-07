import { PictureInfo} from './employee-list.api-model';
import { mockFotoList, mockDibujosList } from './employee-list.mock-data';

// let employeeList = [...mockEmployeeList];

let fotoList = [...mockFotoList];

let dibujoList = [...mockDibujosList];

// export const getEmployeeList = async (): Promise<Employee[]> => {
//   return employeeList;
// };

// export const deleteEmployee = async (id: string): Promise<boolean> => {
//   employeeList = employeeList.filter(e => e.id !== id);
//   return true;
// };

// ---------

export const getFotoList = async (): Promise<PictureInfo[]> => {
  return fotoList;
};

export const getDibujoList = async (): Promise<PictureInfo[]> => {
  return dibujoList;
};