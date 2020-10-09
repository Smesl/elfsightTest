import React from 'react'
import './ElectronicCardItem.css'

 const ElectronicCardItem = ({img, name, information}) => {
    return (
        <li className='electronic-item'>
            <img src={img} className='electronic-item__img' alt='фото сотрудника'/>  
            <div>
                <h2 className='electronic-item__heading'>{name}</h2>
                <div className='electronic-item__border'></div>
                <div className='electronic-item__information'>{information}</div> 
            </div>           
        </li>
    )
}

export default ElectronicCardItem