import React from 'react';//Importando react
import ReactDOM from 'react-dom';//Importando react dom
import { Provider } from 'react-redux'; //Encapsula los componentes y asi tener todo el store para todos los componentes
import { createStore, compose } from 'redux'; //Levanta el store
import App from './routes/App';//Importando App routes
import reducer from './reducers';
import {Router} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import initialState from './initialState'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history = {history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);//Rendereando el componente en el div app del public html
