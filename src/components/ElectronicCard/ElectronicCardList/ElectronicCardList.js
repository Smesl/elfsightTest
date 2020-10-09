import React from 'react'
import './ElectronicCardList.css'
import ElectronicCardItem from '../ElectronicCardItem/ElectronicCardItem'
import ElectronicCardPatient from '../ElectronicCardPatient/ElectronicCardPatient'

const ElectronicCardList = ({cards}) => {  
     const electronicList = cards.map((card, i) => 
        <ElectronicCardItem key={i} img={card.img} name={card.name} information={card.information}    />
        )
    
    return (
        <ul className='electronic-list'>
            <ElectronicCardPatient/>
            {electronicList}
        </ul>
    )
}

export default ElectronicCardList