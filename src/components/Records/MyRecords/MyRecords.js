import React, { Component } from 'react'
import './MyRecords.css'
import MyRecordsList from './MyRecordsList/MyRecordsList'
import woman from '../../../img/woman.svg'
import man from '../../../img/man.svg'
import { NavLink } from 'react-router-dom'

 class MyRecords extends Component {
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
                date: 'Понедельник 15.06.20 | 18:30',
                address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                name: 'Харьков В. С.',
                medicalDirection: 'Терапевтическое отделение',
                img: man

            },
            {
                date: 'Вторник 30.06.20 | 12:10',
                address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                name: 'Малушко Т. Н.',
                medicalDirection: 'Хирургия',
                img: woman

            },
            {
                date: 'Четверг 02.07.20 | 12:30',
                address: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
                name: 'Харьков В. С.',
                medicalDirection: 'Терапевтическое отделение',
                img: man

            },

        ]
     }

    render() {
        const {data} = this.state
        return (
            <div className='myRecord'>
                <div className='myRecord-heading'>
                    <NavLink to='/' className='arrow-left'></NavLink>
                    <div className='myRecord__heading_text'>Мои записи</div>
                </div>            
                <MyRecordsList  records={data} />
            </div>
        )
    }
}

export default MyRecords