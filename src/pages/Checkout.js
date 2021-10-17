import React from 'react'
import Checkoutfinish from '../Components/Checkoutfinish/index';
import NavBar from '../NavBar/index';
import { Redirect } from 'react-router-dom';

const Checkout = ({authorized}) => {
   if(authorized)
   {
      return<Redirect to="/home"/>
   }
    return <>
      
      <NavBar/>
      <Checkoutfinish/>
      
      
   </> 
}

export default Checkout