import React from 'react'
import { NavLink} from 'react-router-dom'
import './RecordsList.css'
import RecordItem from '../RecordItem/RecordItem'

const RecordsList = ({records}) => {  
     const recordList = records.map((record, i) => 
        <RecordItem key={i} date={record.date} address={record.address} name={record.name} medicalDirection={record.medicalDirection} img={record.img} />
        )
    
    return (
        <ul className='record-list'>
            {recordList}
            <div className='other-record'>
                <div>Еще 3 записи</div>
                <NavLink to="/records">Подробнее</NavLink>
            </div>
        </ul>
    )
}

export default RecordsList