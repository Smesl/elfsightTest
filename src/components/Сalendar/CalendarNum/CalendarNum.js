import React from 'react'
import './CalendarNum.css'

const CalendarNum = ({num}) => {
    const numList = num.map((num, i) => 
        <li  className='calendar-num__item' key={i}>{num}</li>
    )
    return (
        <div className='calendar-num'>
            <ul className='calendar-list'>
                <span className='calendar-list__silver'>
                    <li className='calendar-num__item' key='1'>1</li>
                    <li className='calendar-num__item'  key='2'key=''>2</li>
                    <li className='calendar-num__item' key='3'>3</li>
                    <li className='calendar-num__item' key='4'>4</li>
                </span>              
                <li className='calendar-num__item' key='5'>5</li>
                <li className='calendar-num__item' key='6'>6</li>
                <li className='calendar-num__item' key='7'>7</li>
            </ul>
            <ul className='calendar-list'>
                {numList}
            </ul>
        </div>
    )
}

export default CalendarNum
