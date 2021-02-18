import React, { useState } from 'react';
import * as classes from './cart.styles';

interface Props {
  demo: Array<any>
  handleDelete: any
}

export const CartComponent: React.FC<Props> = props => {
  const { demo, handleDelete} = props;

  return (
    <div className={classes.content}>
      {' Mi  carrito de compra contiene .- '}
      {demo.map(row => (
        <div key={row.id}>
          {row.id}
          <img className={classes.imagen} src={row.picUrl} />
          {row.title}
          <button id={row.id} onClick={handleDelete}>elimina</button>
        </div>
      ))}
    </div>
  );
};
