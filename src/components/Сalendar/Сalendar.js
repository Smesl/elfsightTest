import React, { Component } from 'react'
import './Сalendar.css'
import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarDay from './CalendarDay/CalendarDay'
import CalendarNum from './CalendarNum/CalendarNum'

const dayWeek = [8, 9,10, 11, 12, 13, 14 ,15, 16, 17 ,18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30]

class Сalendar extends Component {
    state = {
        num: dayWeek,

    }

    render() {
        return (
            <div className='calendar'>
                <CalendarHeader/>
                <CalendarDay/>
                <CalendarNum num={this.state.num} />
            </div>
        )
    }
}

export default Сalendar
