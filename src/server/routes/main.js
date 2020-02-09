import React from 'react'
import {renderToString} from 'react-dom/server' //renderizar componente a un string
import { Provider } from 'react-redux'; //Encapsula los componentes y asi tener todo el store para todos los componentes
import { createStore } from 'redux'; //Levanta el store
import { StaticRouter } from 'react-router-dom'//Crea una ruta que no cambie para que el servidor no tena problema en crear rutas
import { renderRoutes } from 'react-router-config'
import Routes from '../../frontend/routes/serverRoutes'
import Layout from '../../frontend/components/Layout'
import reducer from '../../frontend/reducers/index'
import initialState from '../../frontend/initialState'
import render from '../render/index'

const main = (req, res, next) => {
    try{
        const store = createStore(reducer, initialState)
        const html = renderToString(
            <Provider
                store = {store}
            >
                <StaticRouter
                    location = {req.url}
                    context = {{}}
                >
                    <Layout>
                        {renderRoutes(Routes)}
                    </Layout>
                </StaticRouter>
            </Provider>
        )

        const preloadedState = store.getState()

        res.send(render(html, preloadedState))
    }catch(err){
        next(err)
    }
}

export default main

