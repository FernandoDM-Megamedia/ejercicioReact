import { Employee, Foto } from './employee.api.model';
import { mockEmployee, mockFoto } from './employee.mock-data';

export const getEmployeeById = async (id: string): Promise<Employee> => {
  return mockEmployee;
};

export const getFotoById = async (id: string): Promise<Foto> => {
  return mockFoto;
};