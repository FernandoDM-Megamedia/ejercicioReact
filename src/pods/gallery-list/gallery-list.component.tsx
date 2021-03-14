import React, { useState, useEffect, useContext } from 'react';
import { PictureInfo } from './gallery-list.vm';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { CartComponent } from '../../common/components/cart'

// import { MyCartContext} from 'common-app/cart-context'

import * as classes from './gallery-list.styles';
import { items } from 'common/components/dashboard/dashboard.styles';

// interface Props {
//   picture: PictureInfo[];
//   section;
// }

export const GalleryListComponent: React.FunctionComponent<any> = ({
  handleOnChange,
  section,
  isChecked,
  picture
}) => {


  // // const {handleOnChange, isChecked } = useContext(MyCartContext)

  // const [item, setItem] = useState([])

  // const handleOnChange = (e: any) => {

  //   e.persist() /*<----------------- revisar para que no se pierda el evento  */
  //   const {
  //     id, checked: check
  //   } = e.target

  //   const imagenObject = picture.find(callbackImg => callbackImg.id === id)  /*<----------------- revisar  */

  //   // console.log(imagenObject)

  //   if (check) {
  //     setItem(prevItems => [...prevItems,
  //       imagenObject
  //     ]);  // metiendo el objeto y añadiendo el nuevo callback  // clonado 
  //   } else {
  //     /* comprobar el id */
  //     /* sacar el que se ha pulsado  */
  //     const index = item.findIndex(i => i.id === id)
  //     // console.log("indexxxxx.- ", index)
  //     if (index > -1) {
  //       // console.log("entro en el iff")
  //       item.splice(index, 1)
  //     }
  //     setItem([...item])
  //   }
  // }

  // // ** funcion borrado

  // const handleDelete = (e: any) => {
  //   e.persist() /*<----------------- revisar para que no se pierda el evento  */
  //   const {
  //     id
  //   } = e.target
  //   // const imagenObject = picture.find(callbackImg => callbackImg.id === id)
  //   const index = item.findIndex(i => i.id === id)
  //   if (index > -1) {
  //     item.splice(index, 1)
  //   }
  //   setItem([...item])
  // }

  // // useEffect(() => { console.log('************', item) }, [item])  solo para saber que me retorna el dato del compoente hijo

  // const isChecked = (id): any => {
  //   const index = item.findIndex(i => i.id === id)
  //   // console.log("dato de ? .-", index)
  //   return index != -1 ? { checked: true } : { checked: false }
  // }

  return (
    <div className={classes.section}>
      {section}
      <div className={classes.content}>
      {picture.map(row => (
        <div key={row.id} className={classes.item}>
          {row.id}
          <img className={classes.imagen} src={row.picUrl} />
          {row.title}
          <input type="checkbox" id={row.id} value={row.title} onChange={handleOnChange} {...isChecked(row.id)} />
          <label htmlFor={row.id}>{'Añadir a mi carrito'}</label>
        </div>
      ))}
      </div>
      {/* <CartComponent demo={item} handleDelete={handleDelete} /> */}
    </div>
  );
};