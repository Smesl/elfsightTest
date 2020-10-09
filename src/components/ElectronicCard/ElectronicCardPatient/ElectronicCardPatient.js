import React from 'react'
import './ElectronicCardPatient.css'
import infoPetient from '../../../img/infoPetient.svg'

 const ElectronicCardItem = props => {
    return (
        <div className='electronic-petient'>
            <img src={infoPetient} />  
            <div>
                <div className='electronic-petient__info'>Информация о пациенте</div>
                <div className='electronic-petient__border'></div>
                <ul className='electronic-petient__list'>
                    <li className='electronic-petient__item'>Ваши личные данные</li> 
                    <li className='electronic-petient__item'>Рекомендации врачей</li>  
                    <li>История болезней</li>    
                </ul>
            </div>           
        </div>
    )
}

export default ElectronicCardItem