import React from 'react'
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Checkout from '../src/pages/Checkout';
import home from '../src/pages/home';


function App () {
  return (
    <BrowserRouter>
    <Switch>
    <Route component = {home} exact  path="/" />
    <Route component = {() => <Checkout authorized={false}/> }   path="/Checkout"  />
    </Switch>
    </BrowserRouter>
       );
    }

export default App

