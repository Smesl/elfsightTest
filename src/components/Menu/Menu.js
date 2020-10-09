import React from 'react'
import Radium from 'radium'
import profile from '../../img/profile.svg'
import doctors from '../../img/doctors.svg'
import message from '../../img/message.svg'
import test from '../../img/test.svg'
import helpfull from '../../img/helpfull.svg'
import help from '../../img/help.svg'
import velox from '../../img/velox.svg'

import  './Menu.css'

const menuHover = {
    ':hover': {
        color: '#7761FF',
        backgroundColor: '#FCFCFC'
    }
}

const linkHover = {
    ':hover': {
        color: '#7761FF',
    }
}

const Menu = () => {
    return(
        <nav className='nav'>
            <div className='menu'>
                <ul className='nav-list'>
                    <li className='menu__li'  style={menuHover} key={1}>
                        <a href='#' className='menu__link' >Логотип</a>
                    </li>
                    <li className='menu__li'>
                        <img src={profile} alt='профиль' />
                        <a href='#' className='menu__link'>Профиль</a>
                    </li> 
                    <li className='menu__li'>
                        <img src={doctors} alt='врачи' />
                        <a href='#' className='menu__link'>Врачи и клиники</a>
                    </li>{}
                    <li className='menu__li'>
                        <img src={message} alt='сообщения' />
                        <a href='#' className='menu__link'>Сообщения</a>
                    </li> 
                    <li className='menu__li'>
                        <img src={test} alt='тестирование' />
                        <a href='#' className='menu__link'>Тестирование</a>
                    </li> 
                    <li className='menu__li'>
                        <img src={helpfull} alt='полезно' />
                        <a href='#' className='menu__link'>Полезно знать</a>
                    </li> 
                </ul>
                <div className='menu__application'>
                    <button className='menu__button'>Подать заявку</button>
                </div>       
                <div className='menu__help'>
                    <img src={help} />
                    <a href='#' className='menu__link'>Помощь</a>
                </div>
                <div className='menu__velox'>
                    <img src={velox} />
                </div>
            </div>
        </nav>        
    )
}

export default Radium(Menu)
