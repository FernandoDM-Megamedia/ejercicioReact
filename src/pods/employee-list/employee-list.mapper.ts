import * as apiModel from './api/employee-list.api-model';
import * as viewModel from './employee-list.vm';

// const mapEmployeeFromApiToVm = (
//   employee: apiModel.Employee
// ): viewModel.Employee => ({
//   ...employee,
// });

// export const mapEmployeeListFromApiToVm = (
//   employeeList: apiModel.Employee[]
// ): viewModel.Employee[] => employeeList.map(e => mapEmployeeFromApiToVm(e));

const mapFotoFromApiToVm = (
  foto: apiModel.PictureInfo
): viewModel.PictureInfo => ({
  ...foto,
});

export const mapFotoListFromApiToVm = (
  fotoList: apiModel.PictureInfo[]
): viewModel.PictureInfo[] => fotoList.map(e => mapFotoFromApiToVm(e));


const mapDibujoFromApiToVm = (
  dibujo: apiModel.PictureInfo
): viewModel.PictureInfo => ({
  ...dibujo,
});

export const mapDibujoListFromApiToVm = (
  dibujoList: apiModel.PictureInfo[]
): viewModel.PictureInfo[] => dibujoList.map(e => mapDibujoFromApiToVm(e));