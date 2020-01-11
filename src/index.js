import React from 'react'//Importando react
import ReactDOM from 'react-dom'//Importando react dom
import {Provider} from 'react-redux'; //Encapsula los componentes y asi tener todo el store para todos los componentes
import {createStore} from 'redux'; //Levanta el store
import App from './routes/App'//Importando App routes

ReactDOM.render(
   
       <Provider>
            <App/>
       </Provider>
   , 
    document.getElementById("app")
);//Rendereando el componente en el div app del public html