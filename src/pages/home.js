import '../App.css';
import React, {useState}  from "react";
import NavBar from '../NavBar';
import Movies from '../Movies';
//import userOutsideClick from './useOutsideClick';
import Sidebar from '../SideCar/Sidebar';
 

const Home  = ()=> {

 const[cart] = useState([]);

  return <> 
   <NavBar/>
   <Movies/>
   <Sidebar cart={cart}/>
  </>
};

export default Home;