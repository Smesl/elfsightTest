import React from 'react'
import './MyRecordsItem.css'

const MyRecordsItem = ({date, address, img, name, medicalDirection}) => {
    return (
        <li className='myRecord-item'>
            <div className='myRecord-item__date'>{date}</div>
            <div className='myRecord-item__adress'>{address}</div> 
            <div className='information-container'>
                <div className='myRecord-item__information'>
                    <img src={img} alt='сотрудник' />
                    <div className='myRecord-item__information_block'>
                        <div className='myRecord-item__information_name'>{name}</div> 
                        <div className='myRecord-item__information_profession'>{medicalDirection}</div>
                    </div>                   
                </div>
                <div>       
                    <button className='myRecord-item__btn'>Отменить</button>
                </div>
            </div>        
        </li>
    )
}

export default MyRecordsItem
