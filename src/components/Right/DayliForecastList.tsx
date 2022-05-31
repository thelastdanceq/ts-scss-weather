import React from 'react'
import { IForecastHour } from '../../App'
import DailyForecastListItem from './DailyForecastListItem'

type Props = {
    data: IForecastHour[]
}

const DayliForecastList = ({ data }: Props) => {

    return (
        <div className='dailyforecast-list'>
            {
                data.map(el => {
                    const date = new Date(el.time_epoch * 1000)
                    if (date.getHours() % 3 === 0) {
                        return <DailyForecastListItem key={el.time_epoch} el={el} />
                    } else return null;
                })
            }
        </div>
    )
}

export default DayliForecastList