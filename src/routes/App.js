import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';

const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component = {Home}></Route>
            <Route exact path ="/login" component = {Login}></Route>
            <Route exact path ="/register" component = {Register}></Route>
            <Route component = {NotFound}></Route>
        </Switch>
    </BrowserRouter>
)
export default App;