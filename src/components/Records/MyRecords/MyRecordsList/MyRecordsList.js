import React from 'react'
import './MyRecordsList.css'
import MyRecordsItem from '../MyRecordsItem/MyRecordsItem'

const MyRecordsList = ({records}) => {  
    const recordList = records.map((record, i) => 
        <MyRecordsItem key={i} date={record.date} address={record.address} name={record.name} medicalDirection={record.medicalDirection} img={record.img} />
    )
    
    return (
        <ul className='myRecord-list'>
            {recordList}
            <div className='other-myRecord'>
            </div>
        </ul>
    )
}

export default MyRecordsList