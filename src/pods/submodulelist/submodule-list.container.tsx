import React from 'react';
import { SumoduleListComponent } from './submodule-list.component';
import { DashboardItemProps } from 'common/components';
import { routes } from 'core/router';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import GroupIcon from '@material-ui/icons/Group';
import { PhotoCamera, ShoppingCart } from '@material-ui/icons';

export const SubmoduleListContainer: React.FunctionComponent = () => {
  const items: DashboardItemProps[] = React.useMemo(
    (): DashboardItemProps[] => [
      {
        title: 'Banco de imagenes',
        linkTo: routes.gallery, // No link defined
        icon: PhotoCamera,
      },
      {
        title: 'Carro de la compra',
        linkTo: routes.employees('foto'),
        icon: ShoppingCart,
      },
      {
        title: 'Con Demo',
        linkTo: routes.employees('dibujo'),
        icon: ShoppingCart,
      },
    ],
    []
  );

  return <SumoduleListComponent items={items} />;
};
