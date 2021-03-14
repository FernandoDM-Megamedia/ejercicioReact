import React, { useState } from 'react';
import * as classes from './cart.styles';
// import { MyCartContext } from 'common-app/cart-context';

interface Props {
  demo: Array<any>
  handleDelete: any
}

export const CartComponent: React.FC<any> = props => {
  const { item, handleDelete } = props;


  React.useEffect(() => {
    console.log(' dentro del carrito -------')
    console.log(props)
  }, [props]);

  // const myContext = React.useContext(MyCartContext);

  return (
    <div className={classes.content}>
      {' Mi  carrito de compra contiene .- '}
      {item && item.map(row => (
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
