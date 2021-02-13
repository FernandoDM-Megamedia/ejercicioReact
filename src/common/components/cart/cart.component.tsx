import React from 'react';

interface Props {
  demo: string
}

export const CartComponent: React.FC<Props> = props => {
    const { demo } = props;
  return (
    <div>
      {' Mi  carrito de compra contiene .- '}
      {demo}

    </div>
  );
};
