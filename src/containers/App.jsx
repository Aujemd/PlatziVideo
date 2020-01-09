import React, {useState, useEffect} from 'react'; //Use State para manejo de estado y effect para las trasmisiones hacer peticiones a un api o escuchar cambios de otras trasmiones entrantes
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss'; //Importando los estilos de este componente

const App = () => {

    const [ videos, setVideos] = useState([]); //Inicializar el estados

    useEffect(() => {//Recordar poner parametro para que escuche el useEffect sino quedara en un bucle infinito
        fetch('http://localhost:3000/initalState')//Hace fetch a la api
        .then(response => response.json())//La respuesta de la promesa la transforma en un json
        .then(data => setVideos(data));//La data de la respuesta en json se la pasa a la funcion setVideos del estado
    }, []);//parametro de useEffect

    console.log(videos);
    console.log(videos.trends.length);
    return (
    <div className="App">
        <Header></Header>
        <Search></Search>
        {
            videos.myList.length > 0 &&
            <Categories title="Mi lista">
            <Carousel>
                <CarouselItem></CarouselItem>
            </Carousel>
        </Categories>
        }
        <Categories title="Tendencias">
            <Carousel>
                {
                    videos.trends.map(item => <CarouselItem key = {item.id} {...item}></CarouselItem>)
                }
            </Carousel>
        </Categories>
        <Categories title="Originales de Platzi Videos">
            <Carousel>
                <CarouselItem></CarouselItem>
            
            </Carousel>
        </Categories>
        <Footer></Footer>
    </div>
);
}
export default App;