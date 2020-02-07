import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    'mylist': [],
    'trends': [],
    'originals': [],
  }); //Inicializar el estados

  useEffect(() => { //Recordar poner parametro para que escuche el useEffect sino quedara en un bucle infinito
    fetch(API)//Hace fetch a la api
      .then((response) => response.json())//La respuesta de la promesa la transforma en un json
      .then((data) => setVideos(data));//La data de la respuesta en json se la pasa a la funcion setVideos del estado
  }, []);//parametro de useEffect

  return videos;
};

export default useInitialState;
