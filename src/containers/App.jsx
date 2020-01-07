import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss'; //Importando los estilos de este componente

const App = () => (
    <div className="App">
        <Header></Header>
        <Search></Search>
        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <Footer></Footer>
            </Carousel>
        </Categories>
        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <Footer></Footer>
            </Carousel>
        </Categories>
        <Categories title="Originales de Platzi Videos">
            <Carousel>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <Footer></Footer>
            </Carousel>
        </Categories>
    </div>
);

export default App;