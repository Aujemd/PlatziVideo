import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss'; //Importando los estilos de este componente

const App = () => (
    <div className="App">
        <Header></Header>
        <Search></Search>
        <Categories>
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Carousel>
        </Categories>
    </div>
);

export default App;