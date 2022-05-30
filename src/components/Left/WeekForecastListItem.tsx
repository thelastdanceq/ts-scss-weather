import React from 'react'
import { IForecastDay } from '../../App'
import { getWeekDay } from '../../functions/postfix'


const WeekForecastListItem = (props: IForecastDay) => {
    const date = new Date(props.date_epoch * 1000);

    return (
        <div className='weekforecast-list-item'>
            <p>{props.day.avgtemp_c} &deg;</p>
            <img src={props.day.condition.icon} alt="" />
            <p>{getWeekDay(date.getDay()).slice(0, 3)}</p>
        </div>
    )
}

export default WeekForecastListItem