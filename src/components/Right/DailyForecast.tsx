import React, { useContext } from 'react'
import { context } from '../../App'
import { getDailyForecast } from '../../functions/dailyforecast';
import DailyForecastList from './DayliForecastList';


const DailyForecast = () => {
    const { weather } = useContext(context)!;
    const { forecast } = weather;

    return (
        <div className="dailyforecast">
            {
                <DailyForecastList data={getDailyForecast(forecast.forecastday.slice(0, 2))} />
            }
        </div>
    )
}

export default DailyForecast