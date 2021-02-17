import React, { useState } from 'react';
import * as classes from './cart.styles';

interface Props {
  demo: Array<any>
  handleDelete: any
}

// interface Type {
//   id: string;
//   ckeck: boolean;
// }


export const CartComponent: React.FC<Props> = props => {
  const { demo, handleDelete} = props;
  console.log("estoy en el carrito con .- ", demo)


  // const [itemDemo, setItemDemo] = useState(demo)

  // const handleOnChange = (e: any) => {
  //   e.persist() /*<----------------- revisar para que no se pierda el evento  */
  //   const {
  //     id
  //   } = e.target
  //   console.log("id.- ", id)

  //   const imagenObject = demo.find(callbackImg => callbackImg.id === id)
  //   console.log(imagenObject)
  //   const index = demo.findIndex(i => i.id === id)
  //   console.log("index .- ", index)
  //   console.log("indexxxxx.- ", index)
  //   if (index > -1) {
  //     console.log("entro en el iff")
  //     demo.splice(index, 1)
  //   }
  //   setItemDemo([...demo])
  // }

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
