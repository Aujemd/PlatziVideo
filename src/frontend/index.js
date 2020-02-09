import React from 'react';//Importando react
import {hydrate} from 'react-dom';//Importando react dom
import { Provider } from 'react-redux'; //Encapsula los componentes y asi tener todo el store para todos los componentes
import { createStore, compose } from 'redux'; //Levanta el store
import App from './routes/App';//Importando App routes
import reducer from './reducers';
import {Router} from 'react-router-dom'
import { createBrowserHistory } from 'history'

if(typeof window !== 'undefined'){
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = window.PRELOADED_STATE

const store = createStore(reducer, preloadedState, composeEnhancers());

const history = createBrowserHistory()


hydrate(
  <Provider store={store}>
    <Router history = {history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);//Rendereando el componente en el div app del public html
}


