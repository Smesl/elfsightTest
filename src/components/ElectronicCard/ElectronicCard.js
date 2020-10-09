import React, { Component } from 'react'
import './ElectronicCard.css'
import ElectronicCardList from './ElectronicCardList/ElectronicCardList'

import analyzes from '../../img/analyzes.svg'
import addInfo from '../../img/addInfo.svg'
import history from '../../img/history.svg'

class ElectronicCard extends Component {
    state = {
        card: [
            {
                img: analyzes,
                name: 'Результаты анализов',
                information : 'Вы можете узнать здесь результаты своих анализов'
            },
            {
                img: addInfo,
                name: 'Добавить  информацию',
                information : 'Добавляйте в свою электронную медицинскую карту новые данные'
            },
            {
                img: history,
                name: 'История приемов',
                information : 'Вся информация о полученных услугах за все время хранится здесь'
            },
        ]
    }

    render() {
        return (
            <div>
               <div className='electronic-card__heading'>Электронная карта</div> 
                <ElectronicCardList cards={this.state.card} />
            </div>
        )
    }
}

export default ElectronicCard
