import React from 'react'
import './RecordItem.css'

const RecordItem = ({date, address, img, name, medicalDirection}) => {
    return (
        <li className='record-item'>
            <div className='record-item__date'>{date}</div>
            <div className='record-item__adress'>{address}</div> 
            <div className='information-container'>
                <div className='record-item__information'>
                    <img src={img} />
                    <div className='record-item__information_block'>
                        <div className='record-item__information_name'>{name}</div> 
                        <div className='record-item__information_profession'>{medicalDirection}</div>
                    </div>                   
                </div>
                <div>       
                    <button className='record-item__btn'>Отменить</button>
                </div>
            </div>        
        </li>
    )
}

export default RecordItem
