import React, { useState } from 'react';
import { PictureInfo } from './employee-list.vm';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { CartComponent } from '../../common/components/cart'

import * as classes from './employee-list.styles';
import { items } from 'common/components/dashboard/dashboard.styles';
interface Props {
  picture: PictureInfo[];
  section;
}
export const EmployeeListComponent: React.FunctionComponent<Props> = ({
  picture,
  section,
}) => {

  const [item, setItem] = useState([])

  const handleOnChange = (e: any) => {

    e.persist() /*<----------------- revisar para que no se pierda el evento  */
    const {
      id, checked: check
    } = e.target


    const imagenObject = picture.find(callbackImg => callbackImg.id === id)  /*<----------------- revisar  */

    // console.log(imagenObject)

    if (check) {
      setItem(prevItems => [...prevItems,
        imagenObject
      ]);
    } else {
      /* comprobar el id */
      /* sacar el que se ha pulsado  */
      const index = item.findIndex(i => i.id === id)
      console.log("indexxxxx.- ", index)
      if (index > -1) {
        console.log("entro en el iff")
        item.splice(index, 1)
      }
      setItem([...item])
    }
  }

  return (
    <>
      {section}
      <hr />
      {picture.map(row => (
        <div key={row.id}>
          {row.id}
          <img className={classes.imagen} src={row.picUrl} />
          {row.title}
          <input type="checkbox" id={row.id} value={row.title} onChange={handleOnChange} />
          <label htmlFor={row.id}>{'Añadir a mi carrito'}</label>
        </div>
      ))}
      <CartComponent demo={item} />
    </>
  );
};
