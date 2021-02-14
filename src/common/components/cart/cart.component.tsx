import React from 'react';
import * as classes from './cart.styles';

interface Props {
  demo: Array<any>
}

interface Type {
  id: string;
  ckeck: boolean;
}

export const CartComponent: React.FC<Props> = props => {
  const { demo } = props;
  console.log("estoy en el carrito con .- ", demo)
  return (
    <div className={classes.content}>
      {' Mi  carrito de compra contiene .- '}
      {demo.map(row => (
        <div key={row.id}>
          {row.id}
          <img className={classes.imagen} src={row.picUrl} />
          {row.title}
        </div>
      ))}
    </div>
  );
};
