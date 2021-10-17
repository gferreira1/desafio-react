import {useHistory} from 'react-router-dom'
//import React,{useState,useEffect} from 'react';
//import { useRef } from 'react';
//import Checkout from '../Components/Checkout';
//import { useOutsideClick } from '../useOutsideClick';
import Item from '../Item';
//import App from '../App';



const Sidebar = ({cart}) => {
   // const dropDownref = useRef(null);
    //const[isActive,setIsActive] = useOutsideClick (dropDownref,false)
    //console.log(isActive)
    //Função de navegacão de pagina 
    
let history = useHistory();


    
    return (
        
        
        <div className="sidebar" >
            {cart.map((Sidecar, index)=><item key={index}/>)}
            <div className="myCar">
                <span>Meu Carinho</span>
                <span>Esvaziar</span>
             </div>
             <div>
              <Item/>
             </div>
             <div className="totalcar">
                <span>Total</span>
                <span>R$ 82,00</span>
                
            </div>
            <div>
            <button className="buttonFin" onClick={()=>{history.push('/checkout')} }> Finalizar compra </button>
            </div>
             
            
        </div>
    
    )
}

export default Sidebar
