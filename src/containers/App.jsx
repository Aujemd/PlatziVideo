import React, { useState, useEffect } from 'react'; //Use State para manejo de estado y effect para las trasmisiones hacer peticiones a un api o escuchar cambios de otras trasmiones entrantes
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState'; //Importando Hook

import '../assets/styles/App.scss'; //Importando los estilos de este componente

const API = 'http://localhost:3000/initalState';
const App = () => {

  const initialState = useInitialState(API);


  return initialState.length === 0 ? <h1>Loading ... </h1> :(
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 &&
       <Categories title='Mi lista'>
       <Carousel>
         <CarouselItem />
       </Carousel>
     </Categories>
      }
     
      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends.map((item) => <CarouselItem key = {item.id} {...item}></CarouselItem>)
          }
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Videos'>
        <Carousel>
          {
            initialState.originals.map((item) => <CarouselItem key = {item.id} {...item}/>)
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;
