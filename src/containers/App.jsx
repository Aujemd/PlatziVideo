import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import '../assets/styles/App.scss'; //Importando los estilos de este componente

const App = () => (
    <div className="App">
        <Header></Header>
        <Search></Search>
    </div>
);

export default App;