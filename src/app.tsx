import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from 'core/theme';
import { AuthProvider } from 'common-app/auth';

import { PictureInfo } from './pods/gallery-list/gallery-list.vm';
import { mapDibujoListFromApiToVm, mapFotoListFromApiToVm } from './pods/gallery-list/gallery-list.mapper';
import { getDibujoList, getFotoList } from './pods/gallery-list/api';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const App: React.FunctionComponent = () => {

  const [section, setSection] = React.useState<string>('')
  // const { section } = useParams();

  const handleSection = (sectionurl) => {
    setSection(sectionurl)
  }


  const [picture, setPicture] = React.useState<PictureInfo[]>([]);
  const history = useHistory();

  const [show, toggleShow] = React.useState(false);

  const handletoggleShow = () => {
    toggleShow(!show)
  }

  const onLoadPictureList = async (section) => {
    const apiPictureList = await (section === 'dibujo' ? getDibujoList() : getFotoList());

    const viewModelPictueList = (section === 'dibujo' ? mapDibujoListFromApiToVm(apiPictureList) : mapFotoListFromApiToVm(apiPictureList));
    setPicture(viewModelPictueList);
  };

  React.useEffect(() => {
    if (section) {
      onLoadPictureList(section);
    }
  }, [section]);

  const [item, setItem] = useState([])

  React.useEffect(() => {
    console.log(item)
  }, [item]);

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
  }

  // ** funcion borrado

  const handleDelete = (e: any) => {
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
  }

  // useEffect(() => { console.log('************', item) }, [item])  solo para saber que me retorna el dato del compoente hijo

  const isChecked = (id): any => {
    const index = item.findIndex(i => i.id === id)
    // console.log("dato de ? .-", index)
    return index != -1 ? { checked: true } : { checked: false }
  }


  return (
    <ThemeProviderComponent>
      <AuthProvider>
        <RouterComponent
          handleOnChange={handleOnChange}
          handleDelete={handleDelete}
          handleSection={handleSection}
          isChecked={isChecked}
          handletoggleShow={handletoggleShow}
          item={item}
          picture={picture}
          section={section}
          show={show} />
      </AuthProvider>
    </ThemeProviderComponent>
  );
};

export default hot(App);
