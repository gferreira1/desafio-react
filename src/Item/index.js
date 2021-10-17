import React from 'react'
import {BsTrashFill} from 'react-icons/bs' ;

const Item = () => {
    return (
        <ul>
        <li>
            <span>Img</span>
            <span>Nome do filme</span> 
            <span>1</span> 
            <span>R$180,00</span> 
            <span><BsTrashFill/></span>    
        </li>
     </ul>
    )
}

export default Item
