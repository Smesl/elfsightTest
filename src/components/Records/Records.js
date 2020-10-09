import React, { Component } from 'react'
import './Records.css'
import RecordsList from './RecordsList/RecordsList'
import woman from '../../img/woman.svg'
import man from '../../img/man.svg'

 class Records extends Component {
     state = {
         data: [
            {
                date: 'Понедельник 15.06.20 | 15:30',
                address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                name: 'Малушко Т. Н.',
                medicalDirection: 'Хирургия',
                img: woman
            },
            {
                date: 'Понедельник 15.06.20 | 18:30 ',
                address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                name: 'Харьков В. С.',
                medicalDirection: 'Терапевтическое отделение',
                img: man

            },
        ]
     }

    render() {
        return (
            <div className='record'>
                <div className='record__heading'>Записи на прием</div>
                <RecordsList  records={this.state.data} />
            </div>
        )
    }
}

export default Records