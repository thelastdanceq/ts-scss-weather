import React from 'react'
import { IForecastHour } from '../../App'
//@ts-ignore
import c from '../../assets/c.png'

type Props = {
    el: IForecastHour
}

const DailyForecastListItem = ({ el }: Props) => {
    const { temp_c, time_epoch, condition } = el;
    const date = new Date(time_epoch * 1000);
    return (
        <div className='dailyforecast-list-item'>
            <p>{temp_c}</p>
            <div className="dailyforecast-list-item-image">
                <img src={c} alt="" />
            </div>
            <img src={condition.icon} alt="" />
            <p>{`${date.getHours()} : ${date.getMinutes()}0`}</p>
        </div>
    )
}

export default DailyForecastListItem