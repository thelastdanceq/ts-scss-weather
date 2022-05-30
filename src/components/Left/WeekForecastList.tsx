import React from 'react'
import { IForecastDay } from '../../App'
import WeekForecastListItem from './WeekForecastListItem';

type Props = {
    forecast: IForecastDay[];
}

const WeekForecastList = (props: Props) => {
    return (
        <div className='weekforecast-list'>
            {
                props.forecast.map((el, index) => {
                    if (index === 0) return null;
                    return <WeekForecastListItem key={el.date_epoch} {...el} />
                })
            }
        </div>
    )
}

export default WeekForecastList