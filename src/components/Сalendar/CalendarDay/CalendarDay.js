import React from 'react'
import './CalendarDay.css'

const CalendarMain = () => {
    return (
        <div className='calendar-day'>
            <div className='calendar-main__day__mon'>Пн</div>
            <div className='calendar-main__day'>Вт</div>
            <div className='calendar-main__day'>Ср</div>
            <div className='calendar-main__day'>Чт</div>
            <div className='calendar-main__day'>Пт</div>
            <div className='calendar-main__day'>Сб</div>
            <div className='calendar-main__day_sun'>Вс</div>
        </div>
    )
}

export default CalendarMain
