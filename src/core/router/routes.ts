import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  gallery: string;
  submoduleList: string;
  employees: string;
  editEmployee: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  gallery: '/gallery',
  submoduleList: '/submodule-list',
  employees: '/listemployees/:section',
  editEmployee: '/employees/:id',
};

interface Routes extends Omit<SwitchRoutes, 'editEmployee'|'employees'> {
  editEmployee: (id: string) => string;
  employees: (section: string) => string; 
}

export const routes: Routes = {
  ...switchRoutes,
  editEmployee: id => generatePath(switchRoutes.editEmployee, { id }),
  employees: section => generatePath(switchRoutes.employees, { section }),
};
