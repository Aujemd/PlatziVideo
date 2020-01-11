import React, { useState, useEffect } from 'react'; //Use State para manejo de estado y effect para las trasmisiones hacer peticiones a un api o escuchar cambios de otras trasmiones entrantes
import {connect} from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss'; //Importando los estilos de este componente

const Home = ({ myList, trends, originals }) => {
  return(
    <>
      <Search />
      {myList.length > 0 &&
       <Categories title='Mi lista'>
       <Carousel>
         {
           myList.map(item => <CarouselItem key = {item.id} {...item}/>)
         }
       </Carousel>
     </Categories>
      }
     
      <Categories title='Tendencias'>
        <Carousel>
          {
            trends.map((item) => <CarouselItem key = {item.id} {...item}></CarouselItem>)
          }
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Videos'>
        <Carousel>
          {
            originals.map((item) => <CarouselItem key = {item.id} {...item}/>)
          }
        </Carousel>
      </Categories>
     
    </>
  );
};

const mapStateToProps = state => { //Mapeando del state principal de redux los elementos del estado a las propiedades de este componente
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home); //Exportando componente conectado al provider de redux para poder acceder a su estado
