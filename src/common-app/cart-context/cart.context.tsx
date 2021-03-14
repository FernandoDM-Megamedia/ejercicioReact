import React, {useState} from 'react';

export interface PictureContext {
    id: string;
    picUrl: string;
    title: string;
}

export interface Props {
  picture: PictureContext[];
}

export const MyCartContext = React.createContext<any>({});

export const MyCartProvider = ({
    picture
  }) => {
    const [item, setItem] = useState([])

  const value = {
      
    handleOnChange: (e: any) => {

    e.persist() /*<----------------- revisar para que no se pierda el evento  */
    const {
      id, checked: check
    } = e.target

    const imagenObject = picture.find(callbackImg => callbackImg.id === id)  /*<----------------- revisar  */

    // console.log(imagenObject)

    if (check) {
      setItem(prevItems => [...prevItems,
        imagenObject
      ]);  // metiendo el objeto y añadiendo el nuevo callback  // clonado 
    } else {
      /* comprobar el id */
      /* sacar el que se ha pulsado  */
      const index = item.findIndex(i => i.id === id)
      // console.log("indexxxxx.- ", index)
      if (index > -1) {
        // console.log("entro en el iff")
        item.splice(index, 1)
      }
      setItem([...item])
    }
  },
  // ** funcion borrado

  handleDelete: (e: any) => {
    e.persist() /*<----------------- revisar para que no se pierda el evento  */
    const {
      id
    } = e.target
    // const imagenObject = picture.find(callbackImg => callbackImg.id === id)
    const index = item.findIndex(i => i.id === id)
    if (index > -1) {
      item.splice(index, 1)
    }
    setItem([...item])
  },
// useEffect(() => { console.log('************', item) }, [item])  solo para saber que me retorna el dato del compoente hijo

    isChecked: (id): any => {
    const index = item.findIndex(i => i.id === id)
    // console.log("dato de ? .-", index)
    return index != -1 ? { checked: true } : { checked: false }
  }
}

    return (
        <MyCartContext.Provider value={picture}>
            {picture.children}
        </MyCartContext.Provider>
    )
}