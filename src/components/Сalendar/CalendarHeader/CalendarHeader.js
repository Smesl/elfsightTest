import React from 'react'
import './CalendarHeader.css'

const CalendarHeader = () => {
    return (
        <div className='calendar-header'>
            <div className='calendar-header__left'></div>
            <div className='calendar-header__date'>
                Июнь, 2020
            </div>
            <div className='calendar-header__right'></div>
        </div>
    )
}

export default CalendarHeader
